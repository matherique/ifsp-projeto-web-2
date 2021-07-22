import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn
} from 'typeorm'

@Entity({ name: 'indicator_data' })
@Unique('indicator_data_uniq', ['country_id', 'indicator_id', 'year'])
export class IndicatorDataSchema {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @Column({ type: 'varchar', length: 100 })
  public country_id: string

  @Column({ type: 'varchar', length: 100 })
  public indicator_id: string

  @Column({ type: 'double precision' })
  public value: number

  @Column({ type: 'int4' })
  public year: number

  @CreateDateColumn()
  public created_at: Date

  @UpdateDateColumn()
  public updated_at: Date
}
