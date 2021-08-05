import {
  GetCountryReportResponse,
  GetCountryReportUsecase
} from '../domain/usecase/get-country-report'
import { CountryRepository } from './ports/country-repository'

export class GetCountryReport implements GetCountryReportUsecase {
  constructor(private readonly countryRepository: CountryRepository) {}

  async handle(): Promise<GetCountryReportResponse> {
    return this.countryRepository.getReport()
  }
}
