import { UserRepository } from "../ports";
import { User, UserData } from "../../domain/user"
import { InvalidUserData } from "./errors/invalid-user";

export class RegisterUser {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(data: UserData): Promise<UserData> {
    const user = User.create(data.name, data.email, data.username, data.password)

    if (!user.validate()) throw new InvalidUserData()
    const newUser = await this.userRepository.create(user);

    return newUser;
  }
}
