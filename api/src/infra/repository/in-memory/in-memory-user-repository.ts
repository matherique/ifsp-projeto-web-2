import { User } from "../../../domain/models";
import { UserRepository } from "../../../usecase/ports";

type UserData = {
  id: string;
  name: string;
  username: string;
  password: string;
  email: string;
};

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async create(data: User): Promise<User> {
    this.users.push(data);
    return data;
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(
      (u) => u.email.toLocaleLowerCase() === email.toLocaleLowerCase()
    );

    return user;
  }

  async update(id: string, data: Partial<User>): Promise<User> {
    const currentUserList = [...this.users];
    this.users = currentUserList.map((u) => {
      if (u.id === id) {
        u = { ...u, ...data };
      }

      return u;
    });

    return this.users.find((u) => u.id === id);
  }

  async findById(id: string): Promise<User> {
    return null;
  }
}
