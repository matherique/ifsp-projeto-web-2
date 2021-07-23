import {
  GetAllCountriesResponse,
  GetAllCountriesUsecase
} from '../domain/usecase/get-all-countries'

export class GetAllCountries implements GetAllCountriesUsecase {
  async handle(): Promise<GetAllCountriesResponse> {
    throw new Error('Method not implemented.')
  }
}
