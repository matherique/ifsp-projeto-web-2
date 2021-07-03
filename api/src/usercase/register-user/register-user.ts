import { UserRepository } from "../ports";

export type UserData = {
  name: string;
  email: string;
  password: string;
  username: string;
};

export class CreateUser {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(data: UserData): Promise<UserData> {
    const user = User.create(data);

    await user.validate();

    const newUser = await this.userRepository.create(data);

    return newUser;
  }
}
