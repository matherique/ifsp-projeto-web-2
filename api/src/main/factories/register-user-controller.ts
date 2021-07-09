import { Controller } from '../../controllers/ports/controller'
import { RegisterUserController } from '../../controllers/register-user-controller'
import { RegisterUser } from '../../usecase/register-user'
import { BcryptAdapter } from '../../infra/cryptography/bcrypt-adapter'
import { PostgresUserRepository } from '../../repository/postgres/postgres-user-repository'
import { Connection } from 'typeorm'

export function makeRegisterUserController(connection: Connection): Controller {
  const userRepository = new PostgresUserRepository(connection)
  const encryptService = new BcryptAdapter(12)
  const registerUserUseCase = new RegisterUser(userRepository, encryptService)
  return new RegisterUserController(registerUserUseCase)
}
