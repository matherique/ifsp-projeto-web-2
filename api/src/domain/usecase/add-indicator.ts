import { Indicator } from '../models/indicator'

export type AddIndicatorParams = {
  data: Buffer
}

export type AddIndicatorResponse = Indicator

export interface AddIndicatorUseCase {
  handle(data: AddIndicatorParams): Promise<AddIndicatorResponse>
}
