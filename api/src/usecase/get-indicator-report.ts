import {
  GetIndicatorReportResponse,
  GetIndicatorReportUsecase
} from '../domain/usecase/get-indicator-report'
import { IndicatorRepository } from './ports'

export class GetIndicatorReport implements GetIndicatorReportUsecase {
  constructor(private readonly indicatorRepository: IndicatorRepository) {}
  async handle(): Promise<GetIndicatorReportResponse> {
    return this.indicatorRepository.getReport()
  }
}
