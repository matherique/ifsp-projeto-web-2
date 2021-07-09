import { User } from "../domain/models";
import { RegisterUserUseCase } from "../domain/usecase";
import { Controller, HttpRequest, HttpResponse, badRequest, internalServerError, created} from "./ports/controller";

export class RegisterUserController implements Controller {
  constructor(private readonly registerUserUseCase: RegisterUserUseCase) {}

  async handle(request: HttpRequest<User>): Promise<HttpResponse> {
    try {
      const { email, password, name } = request.body;

      if (!email) {
        return badRequest("missing email");
      }

      if (!name) {
        return badRequest("missing name");
      }

      if (!password) {
        return badRequest("missing password");
      }

      const isValid = await this.registerUserUseCase.handle({ name, email, password });

      if (!isValid) {
        return internalServerError("something whent wrong");
      }

      return created();
    } catch (error) {
      console.error(error)
      return internalServerError("something whent wrong");
    }
  }
}
