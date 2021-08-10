import { Connection } from 'typeorm'
import { GenerateCountryReportController } from '../../controllers/generate-country-report-controller'
import { Controller } from '../../controllers/ports/controller'
import { PDFMakeAdapter } from '../../infra/report/pdf-adapter'
import { PostgresCountryRepository } from '../../repository/postgres/postgres-country-repository'
import { GenerateCountryReport } from '../../usecase/generate-country-report'
import { GetCountryReport } from '../../usecase/get-country-report'

export function makeGenerateCountryReportController(
  connection: Connection
): Controller {
  const pdfService = new PDFMakeAdapter()
  const countryRepository = new PostgresCountryRepository(connection)
  const getCountryReport = new GetCountryReport(countryRepository)
  const generateCountryReport = new GenerateCountryReport(pdfService)

  return new GenerateCountryReportController(
    getCountryReport,
    generateCountryReport
  )
}
