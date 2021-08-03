export type LogData = {
  user_id: string
  indicator_id: string
  country_id: string
}

export interface LogRepository {
  add(data: LogData[]): Promise<boolean>
}
