import {
  DeleteUserParam,
  DeleteUserUsecase
} from '../domain/usecase/delete-user'
import { UserRepository } from './ports'

export class DeleteUser implements DeleteUserUsecase {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(id: DeleteUserParam): Promise<boolean> {
    return this.userRepository.delete(id)
  }
}
