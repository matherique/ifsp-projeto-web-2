import { IndicatorData } from '../domain/models/indicator-data'
import {
  AddIndicatorDataParams,
  AddIndicatorDataResponse,
  AddIndicatorDataUsecase
} from '../domain/usecase/add-indicator-data'
import { IndicatorRepository } from './ports'
import { CountryRepository } from './ports/country-repository'
import { IndicatorDataRepository } from './ports/indicator-data-repository'

export class AddIndicatorData implements AddIndicatorDataUsecase {
  constructor(
    private readonly indicatorDataRepository: IndicatorDataRepository,
    private readonly indicatorRepository: IndicatorRepository,
    private readonly countryRepository: CountryRepository
  ) {}

  async handle({
    data
  }: AddIndicatorDataParams): Promise<AddIndicatorDataResponse> {
    const indicatorDataList = data
      .toString()
      .split('\r\n')
      .filter(Boolean)
      .slice(3)

    // "Country Name","Country Code","Indicator Name","Indicator Code","1960"....
    const countries = await this.countryRepository.findAll()
    const indicators = await this.indicatorRepository.findAll()

    const allIndicatorsData: Partial<IndicatorData>[] = []

    for (const indicatorData of indicatorDataList) {
      const [, country_code, , indicator_code, ...years] = indicatorData
        .split(',"')
        .map(l => l?.replace(/"/g, '').replace(/,/g, ''))

      const currentCountry = countries.find(c => c.code === country_code)
      const currentIndicator = indicators.find(i => i.code === indicator_code)

      if (!currentCountry || !currentIndicator) continue

      const indicatorsDataItem = years.map((y, i) => ({
        value: Number(y || 0),
        year: i + 1960,
        country_id: currentCountry.id,
        indicator_id: currentIndicator.id
      }))

      allIndicatorsData.push(...indicatorsDataItem)
    }

    return await this.indicatorDataRepository.add(allIndicatorsData)
  }
}
