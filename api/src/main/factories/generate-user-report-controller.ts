import { Connection } from 'typeorm'
import { GenerateUserReportController } from '../../controllers/generate-user-report-controller'
import { Controller } from '../../controllers/ports/controller'
import { PDFMakeAdapter } from '../../infra/report/pdf-adapter'
import { PostgresUserRepository } from '../../repository/postgres/postgres-user-repository'
import { GenerateUserReport } from '../../usecase/generate-user-report'
import { GetUserReportData } from '../../usecase/get-user-report-data'

export function makeGenerateUserReportController(
  connection: Connection
): Controller {
  const userRepository = new PostgresUserRepository(connection)

  const pdfAdapter = new PDFMakeAdapter()
  const generateUserReport = new GenerateUserReport(pdfAdapter)
  const getUserReportData = new GetUserReportData(userRepository)
  return new GenerateUserReportController(getUserReportData, generateUserReport)
}
