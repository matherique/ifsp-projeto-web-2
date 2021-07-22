import { IndicatorData } from '../models/indicator-data'

export type AddIndicatorDataParams = {
  data: Buffer
}

export type AddIndicatorDataResponse = IndicatorData[]
export interface AddIndicatorDataUsecase {
  handle(data: AddIndicatorDataParams): Promise<AddIndicatorDataResponse>
}
