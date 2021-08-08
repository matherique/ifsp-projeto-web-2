import {
  GetIndicatorReportDataResponse,
  GetIndicatorReportDataUsecase
} from '../domain/usecase/get-indicator-report-data'
import { IndicatorRepository } from './ports'

export class GetIndicatorReportData implements GetIndicatorReportDataUsecase {
  constructor(private readonly indicatorRepository: IndicatorRepository) {}
  async handle(): Promise<GetIndicatorReportDataResponse> {
    return await this.indicatorRepository.getReport()
  }
}
