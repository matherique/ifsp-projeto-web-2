import { GetIndicatorReportUsecase } from '../domain/usecase/get-indicator-report'
import {
  Controller,
  HttpRequest,
  HttpResponse,
  internalServerError,
  ok
} from './ports/controller'

export class GetIndicatorReportController implements Controller {
  constructor(
    private readonly getIndicatorReportUsecase: GetIndicatorReportUsecase
  ) {}
  async handle(_: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const data = await this.getIndicatorReportUsecase.handle()

      return ok(data)
    } catch (error) {
      return internalServerError(error.message)
    }
  }
}
