import { Connection } from 'typeorm'
import { GetCountryReportController } from '../../controllers/get-country-report-controller'
import { Controller } from '../../controllers/ports/controller'
import { PostgresCountryRepository } from '../../repository/postgres/postgres-country-repository'
import { GetCountryReport } from '../../usecase/get-country-report'

export default function makeGetCountryReportController(
  connection: Connection
): Controller {
  const countryRepository = new PostgresCountryRepository(connection)
  const getCountryReportUsecase = new GetCountryReport(countryRepository)
  return new GetCountryReportController(getCountryReportUsecase)
}
