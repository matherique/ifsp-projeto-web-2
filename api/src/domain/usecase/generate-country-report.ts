import { CountryReportData } from './get-country-report-data'

export type GenerateCountryReportParams = CountryReportData[]

export type GenerateCountryReportResponse = Buffer

export interface GenerateCountryReportUsecase {
  handle(
    data: GenerateCountryReportParams
  ): Promise<GenerateCountryReportResponse>
}
