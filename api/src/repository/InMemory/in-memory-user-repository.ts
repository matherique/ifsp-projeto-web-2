import { UserData } from "../../domain/user";
import { UserRepository } from "../../usecase/ports";

export class InMemoryUserRepository implements UserRepository {
  private user: UserData[] = []

  async create(data: UserData): Promise<UserData> {
    this.user.push(data);
    return data;
  }

  async findByEmail(email: string): Promise<UserData> {
    const user = this.user.find(u => u.email.toLocaleLowerCase() === email.toLocaleLowerCase())

    return user;
  }

  async update(id: string, data: Partial<UserData>): Promise<UserData> {
    const currentUserList = [...this.user]
    this.user = currentUserList.map(u => {
      if (u.id === id) {
        u = {...u, ...data}
      }

      return u;
    })
    
    return this.user.find(u => u.id === id)
  }
}