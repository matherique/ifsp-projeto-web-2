import {
  GetAllIndicatorsResponse,
  GetAllIndicatorsUsecase
} from '../domain/usecase/get-all-indicators'
import { IndicatorRepository } from './ports'

export class GetAllIndicators implements GetAllIndicatorsUsecase {
  constructor(private readonly indicatorRepository: IndicatorRepository) {}

  async handle(): Promise<GetAllIndicatorsResponse> {
    return this.indicatorRepository.findAll()
  }
}
