import { User, UserPermission } from '../../domain/models'

export type UserData = {
  name: string
  email: string
  password: string
  permission: UserPermission
}

export interface UserRepository {
  delete(id: string): Promise<boolean>
  getAll(): Promise<User[]>
  create(data: UserData): Promise<User>
  findByEmail(email: string): Promise<User>
  findById(id: string): Promise<User>
  update(id: string, userData: Partial<UserData>): Promise<User>
}
