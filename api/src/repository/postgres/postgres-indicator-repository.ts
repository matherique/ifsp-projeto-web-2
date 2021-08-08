import { Connection, Repository } from 'typeorm'
import { Indicator } from '../../domain/models/indicator'
import { IndicatorReportData } from '../../domain/usecase/get-indicator-report-data'
import { IndicatorRepository } from '../../usecase/ports'
import { IndicatorSchema } from './schemas'

export class PostgresIndicatorRepository implements IndicatorRepository {
  private repository: Repository<IndicatorSchema>

  constructor(private readonly connection: Connection) {
    this.repository = this.connection.getRepository(IndicatorSchema)
  }
  async getReport(): Promise<IndicatorReportData[]> {
    return this.repository.query(`select 
    indicator.id, indicator.name, indicator.code, indicator.note, indicator.source_organization, count(log.indicator_id) as views, indicator.created_at 
    from "indicator" left join log on log.indicator_id = indicator.id::character varying group by log.indicator_id, indicator.id 
    order by views desc, indicator.name asc`)
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
