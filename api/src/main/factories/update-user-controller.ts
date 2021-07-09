import { Connection } from 'typeorm'
import { Controller } from '../../controllers/ports/controller'
import { UpdateUserController } from '../../controllers/update-user-controller'
import { PostgresUserRepository } from '../../repository/postgres/postgres-user-repository'
import { UpdateUser } from '../../usecase/update-user'

export function makeUpdateUserController(connection: Connection): Controller {
  const userRepository = new PostgresUserRepository(connection)
  const updateUserUseCase = new UpdateUser(userRepository)

  return new UpdateUserController(updateUserUseCase)
}
