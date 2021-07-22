import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { UserPermission } from '../../../domain/models'

@Entity({ name: 'user' })
export class UserSchema {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column({ type: 'varchar', length: 100 })
  public name: string

  @Column({ type: 'varchar', length: 100 })
  public email: string

  @Column({ type: 'varchar', length: 64 })
  public password: string

  @Column({ type: 'varchar', length: 10, default: UserPermission.DEFAULT })
  public permission: UserPermission

  @CreateDateColumn()
  public created_at: Date

  @UpdateDateColumn()
  public updated_at: Date
}
