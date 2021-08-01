import { DeleteUserUsecase } from '../domain/usecase/delete-user'
import {
  badRequest,
  Controller,
  HttpRequest,
  HttpResponse,
  internalServerError,
  ok
} from './ports/controller'

type DeleteUserControllerBody = {
  id: string
}

export class DeleteUserController implements Controller {
  constructor(private readonly deleteUserUsecase: DeleteUserUsecase) {}
  async handle(
    httpRequest: HttpRequest<DeleteUserControllerBody>
  ): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.body

      if (!id) return badRequest('missing id')

      const hasDeleted = await this.deleteUserUsecase.handle(id)

      return ok({ ok: hasDeleted })
    } catch (error) {
      console.error(error)
      return internalServerError(error.message)
    }
  }
}
