import { HighlightSpanKind } from 'typescript'
import { GetAllIndicatorsUsecase } from '../domain/usecase/get-all-indicators'
import {
  Controller,
  HttpRequest,
  HttpResponse,
  internalServerError,
  ok
} from './ports/controller'

export class GetAllIndicatorsController implements Controller {
  constructor(
    private readonly getAllIndicatorsUsecase: GetAllIndicatorsUsecase
  ) {}
  async handle(_: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const all = await this.getAllIndicatorsUsecase.handle()

      return ok(all)
    } catch (error) {
      console.error(error)
      return internalServerError('something went wrong')
    }
  }
}
