export type CountryReportData = {
  id: string
  name: string
  code: string
  region: string
  views: number
  created_at: string
}

export type GetCountryReportResponse = CountryReportData[]

export interface GetCountryReportUsecase {
  handle(): Promise<GetCountryReportResponse>
}
