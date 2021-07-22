import { Connection, Repository } from 'typeorm'
import { Country } from '../../domain/models/country'
import { CountryRepository } from '../../usecase/ports/country-repository'
import { CountrySchema } from './schemas'

export class PostgresCountryRepository implements CountryRepository {
  private repository: Repository<CountrySchema>

  constructor(private readonly connection: Connection) {
    this.repository = connection.getRepository(CountrySchema)
  }

  async add(data: Partial<Country>): Promise<Country> {
    const countries = await this.repository.findOne({
      where: { code: data.code }
    })

    if (countries) {
      return Promise.resolve(countries)
    }

    return this.repository.save(data)
  }
}
