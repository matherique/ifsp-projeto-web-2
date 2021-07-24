import { IndicatorData } from '../../domain/models/indicator-data'

export type FilterData = {
  countries_id?: string[]
  indicators_id?: string[]
  yearStart?: number
  yearEnd?: number
}

export interface IndicatorDataRepository {
  add(data: Partial<IndicatorData>[]): Promise<IndicatorData[]>
  find(filter: FilterData): Promise<IndicatorData[]>
}
