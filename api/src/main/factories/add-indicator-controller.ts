import { Connection } from 'typeorm'
import { AddIndicatorController } from '../../controllers/add-indicator-controller'
import { Controller } from '../../controllers/ports/controller'
import { PostgresIndicatorRepository } from '../../repository/postgres/postgres-indicator-repository'
import { AddIndicator } from '../../usecase/add-indicator'

export default function makeAddIndicatorController(
  connection: Connection
): Controller {
  const postgresIndicatorRepository = new PostgresIndicatorRepository(
    connection
  )
  const addIndicatorUsecase = new AddIndicator(postgresIndicatorRepository)
  return new AddIndicatorController(addIndicatorUsecase)
}
