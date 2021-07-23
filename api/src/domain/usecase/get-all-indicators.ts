import { Indicator } from '../models'

export type GetAllIndicatorsParams = {}

export type GetAllIndicatorsResponse = Indicator[]

export interface GetAllIndicatorsUsecase {
  handle(): Promise<GetAllIndicatorsResponse>
}
