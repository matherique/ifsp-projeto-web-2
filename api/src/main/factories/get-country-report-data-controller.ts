import { Connection } from 'typeorm'
import { GetCountryReportDataController } from '../../controllers/get-country-report-data-controller'
import { Controller } from '../../controllers/ports/controller'
import { PostgresCountryRepository } from '../../repository/postgres/postgres-country-repository'
import { GetCountryReportData } from '../../usecase/get-country-report-data'

export default function makeGetCountryReportDataController(
  connection: Connection
): Controller {
  const countryRepository = new PostgresCountryRepository(connection)
  const getCountryReportUsecase = new GetCountryReportData(countryRepository)
  return new GetCountryReportDataController(getCountryReportUsecase)
}
