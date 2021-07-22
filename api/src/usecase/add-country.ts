import { Country } from '../domain/models/country'
import {
  AddCountryParams,
  AddCountryResponse,
  AddCountryUsecase
} from '../domain/usecase/add-country'
import { CountryRepository } from './ports/country-repository'

export class AddCountry implements AddCountryUsecase {
  constructor(private readonly countryRepository: CountryRepository) {}
  async handle({ data }: AddCountryParams): Promise<AddCountryResponse> {
    const countryData = data.toString().split('\r\n').filter(Boolean).slice(1)
    // 'Country Code', 'Region', 'IncomeGroup', 'SpecialNotes', 'TableName'
    for (const country of countryData) {
      const [code, region, , , name] = country
        .split(',"')
        .map(l => l?.replace(/"/g, ''))
      console.log(name)
    }

    return null
  }
}
