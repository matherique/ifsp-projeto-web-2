import { User } from '../domain/models'
import { GetUserInfoUseCase } from '../domain/usecase/get-user-info'
import { UserRepository } from './ports'

export class GetUserInfo implements GetUserInfoUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(id: string): Promise<User> {
    return this.userRepository.findById(id)
  }
}
