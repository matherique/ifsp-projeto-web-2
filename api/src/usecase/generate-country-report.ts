import {
  GenerateCountryReportParams,
  GenerateCountryReportResponse,
  GenerateCountryReportUsecase
} from '../domain/usecase/generate-country-report'
import { PDFService } from './ports/pdf-service'

export class GenerateCountryReport implements GenerateCountryReportUsecase {
  constructor(private readonly pdfService: PDFService) {}

  async handle(
    data: GenerateCountryReportParams
  ): Promise<GenerateCountryReportResponse> {
    const pdfHeader = [
      '#',
      'Nome',
      'Código',
      'Região',
      'Visualizações',
      'Data criação'
    ]

    const pdfBody = data.map((country, i) => [
      i + 1,
      country.name,
      country.code,
      country.region,
      country.views,
      new Date(country.created_at).toLocaleString()
    ])

    const pdfBufferData = await this.pdfService.generate(
      'Relatório de Paises cadatrados',
      pdfHeader,
      pdfBody
    )

    return pdfBufferData
  }
}
