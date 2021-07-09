import { BcryptAdapter } from "../../infra/cryptography/bcrypt-adapter";
import { JWTAdapter } from "../../infra/cryptography/jwt-adapter";
import { PostgresUserRepository } from "../../repository/postgres/postgres-user-repository";
import { Controller } from "../../controllers/ports/controller";
import { SignInController } from "../../controllers/sign-in-controller";
import { SignIn } from "../../usecase/sign-in";
import { SALT, SECRET } from "../config/env";
import { Connection } from "typeorm";


export function makeSignInController(connection: Connection): Controller {
  const userRepository = new PostgresUserRepository(connection);
  const encryptService = new BcryptAdapter(SALT);
  const tokenService = new JWTAdapter(SECRET)
  const signInUsecase = new SignIn(userRepository, encryptService, tokenService)
  return new SignInController(signInUsecase)
}
