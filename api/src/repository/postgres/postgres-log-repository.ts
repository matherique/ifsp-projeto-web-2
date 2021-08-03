import { Connection, Repository } from 'typeorm'
import { LogData, LogRepository } from '../../usecase/ports/log-repository'
import { LogSchema } from './schemas/log-schema'

export class PostgresLogRepository implements LogRepository {
  private repository: Repository<LogSchema>
  constructor(private readonly connection: Connection) {
    this.repository = this.connection.getRepository(LogSchema)
  }
  async add(data: LogData[]): Promise<boolean> {
    try {
      await this.repository.save(data)
      return true
    } catch (error) {
      console.error(error)
      return false
    }
  }
}
