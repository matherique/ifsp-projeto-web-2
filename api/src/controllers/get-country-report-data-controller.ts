import { GetCountryReportDataUsecase } from '../domain/usecase/get-country-report-data'
import {
  Controller,
  HttpRequest,
  HttpResponse,
  internalServerError,
  ok
} from './ports/controller'

export class GetCountryReportDataController implements Controller {
  constructor(
    private readonly getCountryReportDataUsecase: GetCountryReportDataUsecase
  ) {}

  async handle(_: HttpRequest): Promise<HttpResponse> {
    try {
      const data = await this.getCountryReportDataUsecase.handle()

      return ok(data)
    } catch (error) {
      return internalServerError(error.message)
    }
  }
}
