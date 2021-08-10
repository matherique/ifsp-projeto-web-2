import { GenerateCountryReport } from '../usecase/generate-country-report'
import { GetCountryReport } from '../usecase/get-country-report'
import {
  Controller,
  HttpRequest,
  HttpResponse,
  internalServerError,
  ok
} from './ports/controller'

export class GenerateCountryReportController implements Controller {
  constructor(
    private readonly getCountryReportData: GetCountryReport,
    private readonly generateCountryReport: GenerateCountryReport
  ) {}

  async handle(_: HttpRequest): Promise<HttpResponse> {
    try {
      const data = await this.getCountryReportData.handle()
      const buff = await this.generateCountryReport.handle(data)

      return ok(buff)
    } catch (error) {
      console.error(error)
      return internalServerError(error.message)
    }
  }
}
