import { Connection, Repository } from 'typeorm'
import { Indicator } from '../../domain/models/indicator'
import { IndicatorReportData } from '../../domain/usecase/get-indicator-report'
import { IndicatorRepository } from '../../usecase/ports'
import { IndicatorSchema } from './schemas'

export class PostgresIndicatorRepository implements IndicatorRepository {
  private repository: Repository<IndicatorSchema>

  constructor(private readonly connection: Connection) {
    this.repository = this.connection.getRepository(IndicatorSchema)
  }
  async getReport(): Promise<IndicatorReportData[]> {
    return this.repository.query('')
  }

  async findAll(): Promise<Indicator[]> {
    return this.repository.find()
  }

  async add(data: Partial<Indicator>): Promise<Indicator> {
    const indicators = await this.repository.findOne({
      where: { code: data.code }
    })

    if (indicators) {
      return Promise.resolve(indicators)
    }

    return this.repository.save(data)
  }
}
