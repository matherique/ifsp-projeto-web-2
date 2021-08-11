export type UserReportData = {
  id: string
  name: string
  email: string
  permission: string
  created_at: string
}

export type GetUserReportDataResponse = UserReportData[]

export interface GetUserReportDataUsecase {
  handle(): Promise<GetUserReportDataResponse>
}
