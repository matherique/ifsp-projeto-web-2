import { UserModel } from "../../entity";

export type UserData = UserModel;

export class CreateUser {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(data: UserData): Promise<UserModel> {
    return Promise.resolve(new UserModel());
  }
}
