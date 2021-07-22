import { Country } from '../models/country'

export type AddCountryResponse = Country[]
export type AddCountryParams = {
  data: Buffer
}
export interface AddCountryUsecase {
  handle(data: AddCountryParams): Promise<AddCountryResponse>
}
