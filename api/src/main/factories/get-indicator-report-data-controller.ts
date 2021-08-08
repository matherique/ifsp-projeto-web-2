import { Connection } from 'typeorm'
import { GetIndicatorReportDataController } from '../../controllers/get-indicator-report-data-controller'
import { Controller } from '../../controllers/ports/controller'
import { PostgresIndicatorRepository } from '../../repository/postgres/postgres-indicator-repository'
import { GetIndicatorReportData } from '../../usecase/get-indicator-report-data'

export default function makeGetIndicatorReportDataController(
  connection: Connection
): Controller {
  const indicatorRepository = new PostgresIndicatorRepository(connection)
  const getIndicatorReportUsecase = new GetIndicatorReportData(
    indicatorRepository
  )
  return new GetIndicatorReportDataController(getIndicatorReportUsecase)
}
