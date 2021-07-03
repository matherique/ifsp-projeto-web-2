import { UserData } from "../../domain/user";

export interface UserRepository {
  create: (data: UserData) => Promise<UserData>;
  findByEmail: (email: string) => Promise<UserData>
  update: (id: string, data: Partial<UserData>) => Promise<UserData>
}
