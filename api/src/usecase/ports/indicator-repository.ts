import { Indicator } from '../../domain/models/indicator'

export interface IndicatorRepository {
  add(data: Partial<Indicator>): Promise<Indicator>
  findAll(): Promise<Indicator[]>
}
