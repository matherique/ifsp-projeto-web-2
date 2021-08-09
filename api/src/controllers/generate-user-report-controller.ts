import { GenerateUserReport } from '../usecase/generate-user-report'
import { GetUserReport } from '../usecase/get-user-report'
import {
  Controller,
  HttpRequest,
  HttpResponse,
  internalServerError,
  ok
} from './ports/controller'

export class GenerateUserReportController implements Controller {
  constructor(
    private readonly getUserReportData: GetUserReport,
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
