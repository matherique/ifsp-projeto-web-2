import { User } from "../../domain/models";
import { RegisterUserUseCase } from "../../domain/usecase";
import { Controller, HttpRequest, HttpResponse, } from "./ports/controller";

export class RegisterUserController implements Controller {
  constructor(private readonly registerUserUseCase: RegisterUserUseCase) {}

  async handle(request: HttpRequest<User>): Promise<HttpResponse> {
    try {
      const { email, password, name } = request.body;

      if (!email) {
        return HttpResponse.badRequest("missing email");
      }

      if (!name) {
        return HttpResponse.badRequest("missing name");
      }

      if (!password) {
        return HttpResponse.badRequest("missing password");
      }

      const isValid = await this.registerUserUseCase.handle({ name, email, password });

      if (!isValid) {
        return HttpResponse.internalServerError("something whent wrong");
      }

      return HttpResponse.created();
    } catch (error) {
      return HttpResponse.internalServerError("something whent wrong");
    }
  }
}
