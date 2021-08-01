import { Connection } from 'typeorm'
import { DeleteUserController } from '../../controllers/delete-user-controller'
import { Controller } from '../../controllers/ports/controller'
import { PostgresUserRepository } from '../../repository/postgres/postgres-user-repository'
import { DeleteUser } from '../../usecase/delete-user'

export default function makeDeleteUserController(
  connection: Connection
): Controller {
  const userRepository = new PostgresUserRepository(connection)
  const deleteUserUsecase = new DeleteUser(userRepository)
  return new DeleteUserController(deleteUserUsecase)
}
