import { IndicatorData } from '../models'

export type GetIndicatorDataParams = {
  countries: string[]
  indicators: string[]
  yearStart: number
  yearEnd: number
}

export type GetIndicatorDataRespose = IndicatorData[]

export interface GetIndicatorDataUsecase {
  handle(data: GetIndicatorDataParams): Promise<GetIndicatorDataRespose>
}
