import { Connection } from 'typeorm'
import { GetIndicatorDataController } from '../../controllers/get-indicator-data-controller'
import { Controller } from '../../controllers/ports/controller'
import { PostgresIndicatorDataRepository } from '../../repository/postgres/postgres-indicator-data-repository'
import { PostgresLogRepository } from '../../repository/postgres/postgres-log-repository'
import { GetIndicatorData } from '../../usecase/get-indicator-data'
import { LogUserAction } from '../../usecase/log-user-action'

export default function makeGetIndicatorDataController(
  connection: Connection
): Controller {
  const indicatorDataRepository = new PostgresIndicatorDataRepository(
    connection
  )
  const logRepository = new PostgresLogRepository(connection)
  const logUserAction = new LogUserAction(logRepository)
  const getIndicatorDataUsecase = new GetIndicatorData(indicatorDataRepository)
  return new GetIndicatorDataController(getIndicatorDataUsecase, logUserAction)
}
