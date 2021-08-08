import { User, UserPermission } from '../../domain/models'
import { UserReportData } from '../../domain/usecase/get-user-report'

export type UserData = {
  name: string
  email: string
  password: string
  permission: UserPermission
}

type ReportData = UserReportData

export interface UserRepository {
  delete(id: string): Promise<boolean>
  getAll(): Promise<User[]>
  create(data: UserData): Promise<User>
  findByEmail(email: string): Promise<User>
  findById(id: string): Promise<User>
  update(id: string, userData: Partial<UserData>): Promise<User>
  getReport(): Promise<ReportData[]>
}
