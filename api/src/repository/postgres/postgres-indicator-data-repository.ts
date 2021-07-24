import { Between, Connection, Repository } from 'typeorm'
import { IndicatorData } from '../../domain/models/indicator-data'
import {
  FilterData,
  IndicatorDataRepository
} from '../../usecase/ports/indicator-data-repository'
import { IndicatorDataSchema } from './schemas'
import { In } from 'typeorm'

export class PostgresIndicatorDataRepository
  implements IndicatorDataRepository {
  private repository: Repository<IndicatorDataSchema>

  constructor(private readonly connection: Connection) {
    this.repository = this.connection.getRepository(IndicatorDataSchema)
  }

  async add(data: Partial<IndicatorData>[]): Promise<IndicatorData[]> {
    return this.repository.save(data)
  }

  async find(data: FilterData): Promise<IndicatorData[]> {
    return this.repository.find({
      where: {
        country_id: In(data.countries_id),
        indicator_id: In(data.indicators_id),
        year: Between(data.yearStart, data.yearEnd)
      },
      order: {
        year: 'ASC'
      }
    })
  }
}
