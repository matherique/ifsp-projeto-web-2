import { GenerateIndicatorReport } from '../usecase/generate-indicator-data'
import { GetIndicatorReportData } from '../usecase/get-indicator-report-data'
import {
  Controller,
  HttpRequest,
  HttpResponse,
  internalServerError,
  ok
} from './ports/controller'

export class GenerateIndicatorReportController implements Controller {
  constructor(
    private readonly getIndicatorReportData: GetIndicatorReportData,
    private readonly generateIndicatorReport: GenerateIndicatorReport
  ) {}

  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const data = await this.getIndicatorReportData.handle()
      const buff = await this.generateIndicatorReport.handle(data)

      return ok(buff)
    } catch (error) {
      console.error(error)
      return internalServerError(error.message)
    }
  }
}
