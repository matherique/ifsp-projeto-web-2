import {
  GenerateIndicatorReportParams,
  GenerateIndicatorReportResponse,
  GenerateIndicatorReportUsecase
} from '../domain/usecase/generate-indicator-report'
import { PDFService } from './ports/pdf-service'

export class GenerateIndicatorReport implements GenerateIndicatorReportUsecase {
  constructor(private readonly pdfService: PDFService) {}

  async handle(
    data: GenerateIndicatorReportParams
  ): Promise<GenerateIndicatorReportResponse> {
    const pdfHeader = [
      '#',
      'Nome',
      'Código',
      'Nota',
      'Organização de origem',
      'Visualizações',
      'Data criação'
    ]

    const pdfBody = data.map((indicator, i) => [
      i + 1,
      indicator.name,
      indicator.code,
      indicator.note,
      indicator.source_organization,
      indicator.views,
      new Date(indicator.created_at).toLocaleString()
    ])

    const pdfBufferData = await this.pdfService.generate(
      'Relatório de Indicatores cadatrados',
      pdfHeader,
      pdfBody
    )

    return pdfBufferData
  }
}
