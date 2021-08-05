import { GetCountryReportUsecase } from '../domain/usecase/get-country-report'
import {
  Controller,
  HttpRequest,
  HttpResponse,
  internalServerError,
  ok
} from './ports/controller'

export class GetCountryReportController implements Controller {
  constructor(
    private readonly getCountryReportUsecase: GetCountryReportUsecase
  ) {}

  async handle(_: HttpRequest): Promise<HttpResponse> {
    try {
      const data = await this.getCountryReportUsecase.handle()

      return ok(data)
    } catch (error) {
      return internalServerError(error.message)
    }
  }
}
