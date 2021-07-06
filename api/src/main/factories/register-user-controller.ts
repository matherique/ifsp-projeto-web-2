import { Controller } from "../../presentation/controllers/ports/controller";
import { RegisterUserController } from "../../presentation/controllers/register-user-controller";
import { InMemoryUserRepository } from "../../infra/repository/in-memory";
import { RegisterUser } from "../../usecase/register-user";
import { BcryptAdapter } from "../../infra/cryptography/bcrypt-adapter";


export function makeRegisterUserController(): Controller  {
  const userRepository = new InMemoryUserRepository();
  const encryptService = new BcryptAdapter(12);
  const registerUserUseCase = new RegisterUser(userRepository, encryptService)
  return new RegisterUserController(registerUserUseCase)
}

