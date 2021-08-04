export type IndicatorReportData = {
  id: string
  name: string
  code: string
  note: string
  source_organization: string
  views: number
  created_at: string
}

export type GetIndicatorReportResponse = IndicatorReportData[]

export interface GetIndicatorReportUsecase {
  handle(): Promise<GetIndicatorReportResponse>
}
