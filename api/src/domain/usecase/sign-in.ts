import { User } from '../models'

export type SignInResponse = {
  token: string
  user: User
}

export interface SignInUseCase {
  handle: (email: string, password: string) => Promise<SignInResponse>
}
