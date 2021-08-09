import {
  GenerateUserReportParams,
  GenerateUserReportResponse,
  GenerateUserReportUsecase
} from '../domain/usecase/generate-user-report'
import { PDFService } from './ports/pdf-service'

export class GenerateUserReport implements GenerateUserReportUsecase {
  constructor(private readonly pdfService: PDFService) {}

  async handle(
    data: GenerateUserReportParams
  ): Promise<GenerateUserReportResponse> {
    const pdfHeader = ['#', 'Nome', 'Email', 'Permissão', 'Data criação']

    const pdfBody = data.map((user, i) => [
      i + 1,
      user.name,
      user.email,
      user.permission,
      new Date(user.created_at).toLocaleString()
    ])

    const pdfBufferData = await this.pdfService.generate(
      'Relatório de Usuários cadatrados',
      pdfHeader,
      pdfBody
    )

    return pdfBufferData
  }
}
