import { GetUserReportUsecase } from '../domain/usecase/get-user-report'
import {
  Controller,
  HttpRequest,
  HttpResponse,
  internalServerError,
  ok
} from './ports/controller'

export class GetUserReportController implements Controller {
  constructor(private readonly getUserReportUsecase: GetUserReportUsecase) {}

  async handle(_: HttpRequest): Promise<HttpResponse> {
    try {
      const data = await this.getUserReportUsecase.handle()

      return ok(data)
    } catch (error) {
      return internalServerError(error.message)
    }
  }
}
