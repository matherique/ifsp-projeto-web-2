import { Indicator } from '../../domain/models/indicator'
import { IndicatorReportData } from '../../domain/usecase/get-indicator-report-data'

type ReportData = IndicatorReportData

export interface IndicatorRepository {
  getReport(): Promise<ReportData[]>
  add(data: Partial<Indicator>): Promise<Indicator>
  findAll(): Promise<Indicator[]>
}
