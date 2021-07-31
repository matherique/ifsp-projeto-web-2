import { GetAllUsersUsecase } from '../domain/usecase/get-all-users'
import {
  Controller,
  HttpRequest,
  HttpResponse,
  internalServerError,
  ok
} from './ports/controller'

export class GetAllUsersController implements Controller {
  constructor(private readonly getAllUserUsecase: GetAllUsersUsecase) {}

  async handle(_: HttpRequest<any>): Promise<HttpResponse> {
    try {
      const users = await this.getAllUserUsecase.handle()

      return ok(users)
    } catch (error) {
      console.error(error)
      return internalServerError(error.message)
    }
  }
}
