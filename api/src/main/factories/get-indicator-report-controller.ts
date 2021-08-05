import { Connection } from 'typeorm'
import { GetIndicatorReportController } from '../../controllers/get-indicator-report-controller'
import { Controller } from '../../controllers/ports/controller'
import { PostgresIndicatorRepository } from '../../repository/postgres/postgres-indicator-repository'
import { GetIndicatorReport } from '../../usecase/get-indicator-report'

export default function makeGetIndicatorReportController(
  connection: Connection
): Controller {
  const indicatorRepository = new PostgresIndicatorRepository(connection)
  const getIndicatorReportUsecase = new GetIndicatorReport(indicatorRepository)
  return new GetIndicatorReportController(getIndicatorReportUsecase)
}
