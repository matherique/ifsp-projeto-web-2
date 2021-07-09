import { User } from "../models";

export type UpdateUserParams = Omit<User, "created_at" | "updated_at">

export interface UpdateUserUseCase {
  handle(id: string, userData: UpdateUserParams): Promise<User>;
}