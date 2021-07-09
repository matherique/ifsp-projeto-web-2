import { Connection } from 'typeorm'
import { GetUserInfoController } from '../../controllers/get-user-info-controller'
import { Controller } from '../../controllers/ports/controller'
import { PostgresUserRepository } from '../../repository/postgres/postgres-user-repository'
import { GetUserInfo } from '../../usecase/get-user-info'

export function makeGetUserInfoController(connection: Connection): Controller {
  const userRepository = new PostgresUserRepository(connection)
  const getUserUseCase = new GetUserInfo(userRepository)
  return new GetUserInfoController(getUserUseCase)
}
