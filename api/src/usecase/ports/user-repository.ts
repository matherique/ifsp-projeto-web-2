import { UserModel } from "../../entity/user-model";

export interface UserRepository {
  create: (data: any) => Promise<UserModel>;
  findByEmail: (email: string) => Promise<UserModel | null>;
}
