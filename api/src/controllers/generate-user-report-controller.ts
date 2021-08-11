import { GenerateUserReport } from '../usecase/generate-user-report'
import { GetUserReportData } from '../usecase/get-user-report-data'
import {
  Controller,
  HttpRequest,
  HttpResponse,
  internalServerError,
  ok
} from './ports/controller'

export class GenerateUserReportController implements Controller {
  constructor(
    private readonly getUserReportData: GetUserReportData,
    private readonly generateUserReport: GenerateUserReport
  ) {}

  async handle(httpRequest: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const data = await this.getUserReportData.handle()
      const buff = await this.generateUserReport.handle(data)

      return ok(buff)
    } catch (error) {
      console.error(error)
      return internalServerError(error.message)
    }
  }
}
