import { EncryptService, UserRepository } from "./ports";
import { User } from "../domain/models";
import { RegisterUserParams, RegisterUserResponse, RegisterUserUseCase } from "../domain/usecase";

export class RegisterUser implements RegisterUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly encryptService: EncryptService,
  ) {}

  async handle(data: RegisterUserParams): Promise<RegisterUserResponse> {
    const { name, email, password } = data

    const hashedPassword = await this.encryptService.hash(password)

    const user = User.create(name, email, hashedPassword);

    const newUser = await this.userRepository.create(user);

    if (!newUser) return false;

    return true;
  }
}
