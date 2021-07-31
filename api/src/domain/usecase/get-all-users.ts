import { User } from '../models'

export type GetAllUsersResponse = User[]

export interface GetAllUsersUsecase {
  handle(): Promise<GetAllUsersResponse>
}
