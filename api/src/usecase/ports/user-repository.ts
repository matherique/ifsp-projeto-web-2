import { User } from "../../domain/models";

export interface UserRepository {
  create(data: User): Promise<User>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  update(id: string, userData: User): Promise<User>;
}
