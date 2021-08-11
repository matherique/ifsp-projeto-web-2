export type CountryReportData = {
  id: string
  name: string
  code: string
  region: string
  views: number
  created_at: string
}

export type GetCountryReportDataResponse = CountryReportData[]

export interface GetCountryReportDataUsecase {
  handle(): Promise<GetCountryReportDataResponse>
}
