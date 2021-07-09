import { GetUserInfoUseCase } from '../domain/usecase/get-user-info'
import {
  badRequest,
  Controller,
  HttpRequest,
  HttpResponse,
  internalServerError,
  notFound,
  ok
} from './ports/controller'

type GetUserInfoRequestData = {
  id: string
}

export class GetUserInfoController implements Controller {
  constructor(private readonly getUserUseCase: GetUserInfoUseCase) {}
  async handle(
    httpRequest: HttpRequest<GetUserInfoRequestData>
  ): Promise<HttpResponse> {
    try {
      const { id } = httpRequest.body

      if (!id) return badRequest('missing id')

      const userInfo = await this.getUserUseCase.handle(id)

      if (!userInfo) {
        return notFound('user not found')
      }

      return ok(userInfo)
    } catch (error) {
      console.error(error)
      return internalServerError(error.message)
    }
  }
}
