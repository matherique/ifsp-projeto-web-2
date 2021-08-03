export type LogUserActionParams = {
  user_id: string
  indicator_ids: string[]
  country_ids: string[]
}

export type LogUserActionResponse = boolean

export interface LogUserActionUsecase {
  handle(data: LogUserActionParams): Promise<LogUserActionResponse>
}
