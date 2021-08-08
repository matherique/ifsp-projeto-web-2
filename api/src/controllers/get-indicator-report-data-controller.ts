import { GetIndicatorReportDataUsecase } from '../domain/usecase/get-indicator-report-data'
import {
  Controller,
  HttpRequest,
  HttpResponse,
  internalServerError,
  ok
} from './ports/controller'

export class GetIndicatorReportDataController implements Controller {
  constructor(
    private readonly getIndicatorReportDataUsecase: GetIndicatorReportDataUsecase
  ) {}
  async handle(_: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const data = await this.getIndicatorReportDataUsecase.handle()

      return ok(data)
    } catch (error) {
      return internalServerError(error.message)
    }
  }
}
