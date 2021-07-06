import { User } from "../domain/models";
import { UpdateUserUseCase } from "../domain/usecase/update-user";
import { UserRepository } from "./ports";


export class UpdateUser implements UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(id: string, userData: User): Promise<User> {
    const userToUpdate = await this.userRepository.update(id, userData);
    return userToUpdate;
  }
}
