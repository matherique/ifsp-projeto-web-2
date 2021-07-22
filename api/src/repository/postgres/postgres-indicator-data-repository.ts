import { Connection, Repository } from 'typeorm'
import { IndicatorData } from '../../domain/models/indicator-data'
import { IndicatorDataRepository } from '../../usecase/ports/indicator-data-repository'
import { IndicatorDataSchema } from './schemas'

export class PostgresIndicatorDataRepository
  implements IndicatorDataRepository
{
  private repository: Repository<IndicatorDataSchema>

  constructor(private readonly connection: Connection) {
    this.repository = connection.getRepository(IndicatorDataSchema)
  }

  async add(data: Partial<IndicatorData>[]): Promise<IndicatorData[]> {
    return this.repository.save(data)
  }
}
