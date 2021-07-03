import { UserRepository } from "../ports";
import { User } from "../../domain"

export type UserData = {
  name: string;
  email: string;
  password: string;
  username: string;
};

export class CreateUser {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(data: UserData): Promise<UserData> {
    const user = User.create(data.name, data.email, data.username, data.password)

    if (!user.validate()) throw new Error("invalid user")
    const newUser = await this.userRepository.create(user);

    return newUser;
  }
}
