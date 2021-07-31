import { UserPermission } from '../domain/models'
import {
  GetAllUsersResponse,
  GetAllUsersUsecase
} from '../domain/usecase/get-all-users'
import { UserRepository } from './ports'

export class GetAllUsers implements GetAllUsersUsecase {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(): Promise<GetAllUsersResponse> {
    const users = await this.userRepository.getAll()

    return users.filter(user => user.permission !== UserPermission.ADMIN)
  }
}
