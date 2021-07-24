import {
  GetAllCountriesResponse,
  GetAllCountriesUsecase
} from '../domain/usecase/get-all-countries'
import { CountryRepository } from './ports/country-repository'

export class GetAllCountries implements GetAllCountriesUsecase {
  constructor(private readonly countryRepository: CountryRepository) {}

  async handle(): Promise<GetAllCountriesResponse> {
    return this.countryRepository.findAll()
  }
}
