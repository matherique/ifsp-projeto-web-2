import { Country } from '../models'

export type GetAllCountriesParams = {}

export type GetAllCountriesResponse = Country[]

export interface GetAllCountriesUsecase {
  handle(): Promise<GetAllCountriesResponse>
}
