import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn
} from 'typeorm'

@Entity({ name: 'indicator' })
@Unique('indicator_code', ['code'])
export class IndicatorSchema {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column({ type: 'varchar', length: 30 })
  public code: string

  @Column({ type: 'varchar', length: 100 })
  public name: string

  @Column({ type: 'text' })
  public note: string

  @Column({ type: 'text' })
  public source_organization: string

  @CreateDateColumn()
  public created_at: Date

  @UpdateDateColumn()
  public updated_at: Date
}
