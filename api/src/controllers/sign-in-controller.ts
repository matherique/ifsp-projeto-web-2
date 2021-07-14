import { SignInUseCase } from '../domain/usecase'
import {
  Controller,
  HttpRequest,
  HttpResponse,
  internalServerError,
  ok,
  badRequest
} from './ports/controller'

type SignInBodyRequest = {
  email: string
  password: string
}

export class SignInController implements Controller {
  constructor(private readonly signInUsecase: SignInUseCase) {}

  async handle(
    httpRequest: HttpRequest<SignInBodyRequest>
  ): Promise<HttpResponse> {
    const { email, password } = httpRequest.body

    if (!email) return badRequest('missing email')
    if (!password) return badRequest('missing password')

    try {
      const response = await this.signInUsecase.handle(email, password)

      if (!response) {
        return badRequest('invalid email or password')
      }

      const { token, user } = response

      return ok({ token, user })
    } catch (error) {
      return internalServerError(error.message)
    }
  }
}
