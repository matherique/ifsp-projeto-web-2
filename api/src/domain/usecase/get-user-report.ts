export type UserReportData = {
  id: string
  name: string
  email: string
  permission: string
  created_at: string
}

export type GetUserReportResponse = UserReportData[]

export interface GetUserReportUsecase {
  handle(): Promise<GetUserReportResponse>
}
