import { Connection } from 'typeorm'
import { GetUserReportDataController } from '../../controllers/get-user-report-data-controller'
import { Controller } from '../../controllers/ports/controller'
import { PostgresUserRepository } from '../../repository/postgres/postgres-user-repository'
import { GetUserReportData } from '../../usecase/get-user-report-data'

export default function makeGetUserReportDataController(
  connection: Connection
): Controller {
  const userRepository = new PostgresUserRepository(connection)
  const getUserReportUsecase = new GetUserReportData(userRepository)
  return new GetUserReportDataController(getUserReportUsecase)
}
