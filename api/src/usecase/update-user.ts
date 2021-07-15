import { User } from '../domain/models'
import { UpdateUserUseCase } from '../domain/usecase/update-user'
import { EncryptService, UserRepository } from './ports'

export class UpdateUser implements UpdateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly encryptService: EncryptService
  ) {}

  async handle(id: string, { name, email, password }: User): Promise<User> {
    let userToUpdate: User

    if (password) {
      let newPassword = await this.encryptService.hash(password)

      userToUpdate = await this.userRepository.update(id, {
        name,
        email,
        password: newPassword
      })

      return userToUpdate
    }

    userToUpdate = await this.userRepository.update(id, {
      name,
      email
    })

    return userToUpdate
  }
}
