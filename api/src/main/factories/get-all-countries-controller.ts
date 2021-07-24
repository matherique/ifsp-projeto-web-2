import { Connection } from 'typeorm'
import { GetAllCountriesController } from '../../controllers/get-all-countries-controller'
import { Controller } from '../../controllers/ports/controller'
import { PostgresCountryRepository } from '../../repository/postgres/postgres-country-repository'
import { GetAllCountries } from '../../usecase/get-all-countries'

export default function makeGetAllCountriesController(
  connection: Connection
): Controller {
  const countryRepository = new PostgresCountryRepository(connection)
  const getAllCountriesController = new GetAllCountries(countryRepository)
  return new GetAllCountriesController(getAllCountriesController)
}
