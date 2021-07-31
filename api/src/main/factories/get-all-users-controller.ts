import { Connection } from 'typeorm'
import { GetAllUsersController } from '../../controllers/get-all-users-controller'
import { Controller } from '../../controllers/ports/controller'
import { PostgresUserRepository } from '../../repository/postgres/postgres-user-repository'
import { GetAllUsers } from '../../usecase/get-all-users'

export default function makeGetAllUsersController(
  connection: Connection
): Controller {
  const usersRepository = new PostgresUserRepository(connection)
  const getAllUserUsecase = new GetAllUsers(usersRepository)
  return new GetAllUsersController(getAllUserUsecase)
}
