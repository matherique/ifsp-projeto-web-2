import {
  LogUserActionParams,
  LogUserActionUsecase,
  LogUserActionResponse
} from '../domain/usecase/log-user-action'
import { LogRepository } from './ports/log-repository'

export class LogUserAction implements LogUserActionUsecase {
  constructor(private readonly logRepository: LogRepository) {}
  async handle({
    user_id,
    indicator_ids,
    country_ids
  }: LogUserActionParams): Promise<LogUserActionResponse> {
    let data = []
    for (const indicator_id of indicator_ids) {
      for (const country_id of country_ids) {
        data.push({ user_id, indicator_id, country_id })
      }
    }

    const hasInserted = this.logRepository.add(data)

    return hasInserted
  }
}
