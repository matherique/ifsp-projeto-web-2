import { GetAllCountriesUsecase } from '../domain/usecase/get-all-countries'
import {
  Controller,
  HttpRequest,
  HttpResponse,
  internalServerError,
  ok
} from './ports/controller'

export class GetAllCountriesController implements Controller {
  constructor(
    private readonly getAllCountriesUsecase: GetAllCountriesUsecase
  ) {}
  async handle(_: HttpRequest): Promise<HttpResponse> {
    try {
      const countries = await this.getAllCountriesUsecase.handle()

      return ok(countries)
    } catch (error) {
      console.error(error)
      return internalServerError(error.message)
    }
  }
}
