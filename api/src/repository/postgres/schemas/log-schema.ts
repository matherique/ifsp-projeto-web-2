import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity({ name: 'log' })
export class LogSchema {
  @PrimaryGeneratedColumn('uuid')
  public user_id

  @Column({ type: 'varchar', length: 100 })
  public indicator_id

  @Column({ type: 'varchar', length: 100 })
  public country_id

  @CreateDateColumn()
  public created_at

  @UpdateDateColumn()
  public updated_at
}
