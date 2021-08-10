import { IndicatorReportData } from './get-indicator-report-data'

export type GenerateIndicatorReportParams = IndicatorReportData[]

export type GenerateIndicatorReportResponse = Buffer

export interface GenerateIndicatorReportUsecase {
  handle(
    data: GenerateIndicatorReportParams
  ): Promise<GenerateIndicatorReportResponse>
}
