import { UserReportData } from './get-user-report'

export type GenerateUserReportParams = UserReportData[]

export type GenerateUserReportResponse = Buffer

export interface GenerateUserReportUsecase {
  handle(data: GenerateUserReportParams): Promise<GenerateUserReportResponse>
}
