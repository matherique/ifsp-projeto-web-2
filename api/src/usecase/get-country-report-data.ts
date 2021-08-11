import {
  GetCountryReportDataResponse,
  GetCountryReportDataUsecase
} from '../domain/usecase/get-country-report-data'
import { CountryRepository } from './ports/country-repository'

export class GetCountryReportData implements GetCountryReportDataUsecase {
  constructor(private readonly countryRepository: CountryRepository) {}

  async handle(): Promise<GetCountryReportDataResponse> {
    return this.countryRepository.getReport()
  }
}
