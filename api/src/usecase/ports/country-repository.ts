import { Country } from '../../domain/models/country'
import { CountryReportData } from '../../domain/usecase/get-country-report-data'

type ReportData = CountryReportData

export interface CountryRepository {
  getReport(): Promise<ReportData[]>
  add(data: Partial<Country>): Promise<Country>
  findAll(): Promise<Country[]>
}
