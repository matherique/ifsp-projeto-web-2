import { UpdateUserUseCase } from '../domain/usecase'
import {
  badRequest,
  Controller,
  HttpRequest,
  HttpResponse,
  internalServerError,
  ok
} from './ports/controller'

type UpdateUserRequest = {
  id: string
  name: string
  email: string
  password: string
}

export class UpdateUserController implements Controller {
  constructor(private readonly updateUserUsecase: UpdateUserUseCase) {}

  async handle(
    httpRequest: HttpRequest<UpdateUserRequest>
  ): Promise<HttpResponse> {
    try {
      let { id, name, email, password } = httpRequest.body
      if (!id) return badRequest('missing id')
      if (!name) return badRequest('missing name')
      if (!email) return badRequest('missing email')

      const userData = { name, email, password }
      const updatedUser = await this.updateUserUsecase.handle(id, userData)

      return ok(updatedUser)
    } catch (error) {
      console.error(error)
      return internalServerError(error.message)
    }
  }
}
