import { Connection } from 'typeorm'
import { GetIndicatorDataController } from '../../controllers/get-indicator-data-controller'
import { Controller } from '../../controllers/ports/controller'
import { PostgresIndicatorDataRepository } from '../../repository/postgres/postgres-indicator-data-repository'
import { GetIndicatorData } from '../../usecase/get-indicator-data'

export default function makeGetIndicatorDataController(
  connection: Connection
): Controller {
  const indicatorDataRepository = new PostgresIndicatorDataRepository(
    connection
  )
  const getIndicatorDataUsecase = new GetIndicatorData(indicatorDataRepository)
  return new GetIndicatorDataController(getIndicatorDataUsecase)
}
