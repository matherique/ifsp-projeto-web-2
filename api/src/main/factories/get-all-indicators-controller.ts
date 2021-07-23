import { Connection } from 'typeorm'
import { GetAllIndicatorsController } from '../../controllers/get-all-indicators-controller'
import { Controller } from '../../controllers/ports/controller'
import { PostgresIndicatorRepository } from '../../repository/postgres/postgres-indicator-repository'
import { GetAllIndicators } from '../../usecase/get-all-indicators'

export default function makeGetAllIndicatorsController(
  connection: Connection
): Controller {
  const indicatorRepository = new PostgresIndicatorRepository(connection)
  const getAllindicatorsUsecase = new GetAllIndicators(indicatorRepository)
  return new GetAllIndicatorsController(getAllindicatorsUsecase)
}
