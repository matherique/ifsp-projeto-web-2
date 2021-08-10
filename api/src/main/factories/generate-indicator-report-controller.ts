import { Connection } from 'typeorm'
import { GenerateIndicatorReportController } from '../../controllers/generate-indicator-report-controller'
import { Controller } from '../../controllers/ports/controller'
import { PDFMakeAdapter } from '../../infra/report/pdf-adapter'
import { PostgresIndicatorRepository } from '../../repository/postgres/postgres-indicator-repository'
import { GenerateIndicatorReport } from '../../usecase/generate-indicator-data'
import { GetIndicatorReportData } from '../../usecase/get-indicator-report-data'

export function makeGenerateIndicatorReportController(
  connection: Connection
): Controller {
  const indicatorRepository = new PostgresIndicatorRepository(connection)

  const pdfAdapter = new PDFMakeAdapter()
  const generateIndicatorReport = new GenerateIndicatorReport(pdfAdapter)
  const getIndicatorReportData = new GetIndicatorReportData(indicatorRepository)
  return new GenerateIndicatorReportController(
    getIndicatorReportData,
    generateIndicatorReport
  )
}
