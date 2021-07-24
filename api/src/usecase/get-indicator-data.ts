import {
  GetIndicatorDataParams,
  GetIndicatorDataRespose,
  GetIndicatorDataUsecase
} from '../domain/usecase/get-indicator-data'
import { IndicatorDataRepository } from './ports/indicator-data-repository'

export class GetIndicatorData implements GetIndicatorDataUsecase {
  constructor(
    private readonly indicatorDataRepository: IndicatorDataRepository
  ) {}

  async handle({
    countries,
    indicators,
    yearStart,
    yearEnd
  }: GetIndicatorDataParams): Promise<GetIndicatorDataRespose> {
    return this.indicatorDataRepository.find({
      countries_id: countries,
      indicators_id: indicators,
      yearStart,
      yearEnd
    })
  }
}
