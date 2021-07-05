import { UserRepository } from "../ports";
import { User } from "../../domain/user";
import { RegisterUserResponse } from "./register-user-response";
import { RegisterUserData } from "./register-user-data";

export interface RegisterUserUseCase {
  handle: (data: RegisterUserData) => Promise<RegisterUserResponse>;
}

export class RegisterUser implements RegisterUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(data: RegisterUserData): Promise<RegisterUserResponse> {
    const user = User.create(
      data.name,
      data.email,
      data.username,
      data.password
    );

    const newUser = await this.userRepository.create(user);

    return newUser;
  }
}
