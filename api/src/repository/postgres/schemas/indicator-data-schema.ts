import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'
import { CountrySchema } from './country-schema'
import { IndicatorSchema } from './indicator-schema'

@Entity({ name: 'indicator_data' })
export class IndicatorDataSchema {
  @PrimaryGeneratedColumn('uuid')
  public id: string

  @OneToOne(() => CountrySchema)
  @JoinColumn({ name: 'country_id' })
  public country_id: string

  @OneToOne(() => IndicatorSchema)
  @JoinColumn({ name: 'indicator_id' })
  public indicator_id: number

  @Column({ type: 'double precision' })
  public value: number

  @Column({ type: 'int4' })
  public year: number

  @CreateDateColumn()
  public created_at: Date

  @UpdateDateColumn()
  public updated_at: Date
}
