import { Connection, Repository } from 'typeorm'
import { Country } from '../../domain/models/country'
import { CountryReportData } from '../../domain/usecase/get-country-report-data'
import { CountryRepository } from '../../usecase/ports/country-repository'
import { CountrySchema } from './schemas'

export class PostgresCountryRepository implements CountryRepository {
  private repository: Repository<CountrySchema>

  constructor(private readonly connection: Connection) {
    this.repository = this.connection.getRepository(CountrySchema)
  }
  async getReport(): Promise<CountryReportData[]> {
    return this.repository.query(`select 
    country.id, country.name, country.code, country.region, count(log.country_id) as views, country.created_at 
    from "country" left join log on log.country_id = country.id::character varying group by log.country_id, country.id 
    order by views desc, country.name asc`)
  }

  async findAll(): Promise<Country[]> {
    return this.repository.find()
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
