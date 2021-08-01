import { Connection, Repository } from 'typeorm'
import { User } from '../../domain/models'
import { UserData, UserRepository } from '../../usecase/ports'
import { UserSchema } from './schemas'

export class PostgresUserRepository implements UserRepository {
  private repository: Repository<UserSchema>

  constructor(private readonly connection: Connection) {
    this.repository = this.connection.getRepository(UserSchema)
  }

  async delete(id: string): Promise<boolean> {
    const deleted = await this.repository.delete(id)
    return deleted.affected === 1
  }

  async getAll(): Promise<User[]> {
    return this.repository.find()
  }

  async create(data: UserData): Promise<User> {
    return await this.repository.save(data)
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.repository.findOne({ where: { email } })

    if (!email) return null

    return user
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id)

    if (!user) return null

    return user
  }

  async update(id: string, userData: User): Promise<User> {
    const updatedInfo = await this.repository.update(id, userData)

    if (updatedInfo.affected < 1) return null

    const updatedUser = updatedInfo.generatedMaps[0] as User

    return updatedUser
  }
}
