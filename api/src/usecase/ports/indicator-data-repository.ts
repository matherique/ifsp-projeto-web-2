import { IndicatorData } from '../../domain/models/indicator-data'

export interface IndicatorDataRepository {
  add(data: Partial<IndicatorData>[]): Promise<IndicatorData[]>
}
