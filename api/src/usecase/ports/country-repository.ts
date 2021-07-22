import { Country } from '../../domain/models/country'

export interface CountryRepository {
  add(data: Partial<Country>): Promise<Country>
  findAll(): Promise<Country[]>
}
