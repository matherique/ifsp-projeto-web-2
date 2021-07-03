import { User } from "../../domain";

export interface UserRepository {
  findOne: (id: string) => Promise<User>;
  findAll: () => Promise<User[]>;
  create: (data: User) => Promise<User>;
}
