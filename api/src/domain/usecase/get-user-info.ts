import { User } from '../models'

type GetUserInfoResponse = User

export interface GetUserInfoUseCase {
  handle(id: string): Promise<GetUserInfoResponse>
}
