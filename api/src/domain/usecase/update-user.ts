import { User } from "../models";

export type UpdateUserParams = User

export interface UpdateUserUseCase {
  handle(id: string, userData: UpdateUserParams): Promise<User>;
}