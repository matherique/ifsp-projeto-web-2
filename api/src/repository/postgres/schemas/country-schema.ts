import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn
} from 'typeorm'

@Entity({ name: 'country' })
@Unique('country_code', ['code'])
export class CountrySchema {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column({ type: 'varchar', length: 100 })
  public name: string

  @Column({ type: 'varchar', length: 3 })
  public code: string

  @Column({ type: 'varchar', length: 100 })
  public region: string

  @CreateDateColumn()
  public created_at: Date

  @UpdateDateColumn()
  public updated_at: Date
}
