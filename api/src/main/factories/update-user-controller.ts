import { Connection } from 'typeorm'
import { Controller } from '../../controllers/ports/controller'
import { UpdateUserController } from '../../controllers/update-user-controller'
import { BcryptAdapter } from '../../infra/cryptography/bcrypt-adapter'
import { PostgresUserRepository } from '../../repository/postgres/postgres-user-repository'
import { UpdateUser } from '../../usecase/update-user'
import { SALT } from '../config/env'

export function makeUpdateUserController(connection: Connection): Controller {
  const userRepository = new PostgresUserRepository(connection)
  const encryptService = new BcryptAdapter(SALT)
  const updateUserUseCase = new UpdateUser(userRepository, encryptService)

  return new UpdateUserController(updateUserUseCase)
}
