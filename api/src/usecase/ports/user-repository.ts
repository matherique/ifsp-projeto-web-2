import { User } from "../../domain/models";

export type UserData = {
  name: string
  email: string;
  password: string
}

export interface UserRepository {
  create(data: UserData): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  update(id: string, userData: UserData): Promise<User>;
}
 