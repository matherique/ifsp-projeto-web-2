import { Connection } from 'typeorm'
import { GetUserReportController } from '../../controllers/get-user-report-controller'
import { Controller } from '../../controllers/ports/controller'
import { PostgresUserRepository } from '../../repository/postgres/postgres-user-repository'
import { GetUserReport } from '../../usecase/get-user-report'

export default function makeGetUserReportController(
  connection: Connection
): Controller {
  const userRepository = new PostgresUserRepository(connection)
  const getUserReportUsecase = new GetUserReport(userRepository)
  return new GetUserReportController(getUserReportUsecase)
}
