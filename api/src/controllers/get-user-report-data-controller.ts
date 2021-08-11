import { GetUserReportDataUsecase } from '../domain/usecase/get-user-report-data'
import {
  Controller,
  HttpRequest,
  HttpResponse,
  internalServerError,
  ok
} from './ports/controller'

export class GetUserReportDataController implements Controller {
  constructor(
    private readonly getUserReportUsecase: GetUserReportDataUsecase
  ) {}

  async handle(_: HttpRequest): Promise<HttpResponse> {
    try {
      const data = await this.getUserReportUsecase.handle()

      return ok(data)
    } catch (error) {
      return internalServerError(error.message)
    }
  }
}
