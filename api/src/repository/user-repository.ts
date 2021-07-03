import { getRepository, Repository } from "typeorm";
import { User } from "../domain";
import { UserModel } from "../entity";
import { UserRepository } from "../usercase/ports";

export default class UserRepository implements UserRepository {
  private userRepository: Repository<UserModel>;

  constructor() {
    this.userRepository = getRepository(UserModel);
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne(id);

    return user;
  }

  async findAll(): Promise<User[]> {
    const allUsers = await this.userRepository.find();
    return allUsers;
  }

  async create(data: User): Promise<User> {
    const created = await this.userRepository.save(data);
    return created;
  }
}
