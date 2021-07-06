import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  UpdateDateColumn,
} from "typeorm";
import { CountrySchema } from "./country-schema";
import { IndicatorModel } from "./indicator-schema";

@Entity({ name: "indicator_data" })
export class IndicatorDataSchema {
  @OneToOne(() => CountrySchema)
  @JoinColumn({ name: "country_id" })
  public country_id: string;

  @OneToOne(() => IndicatorModel)
  @JoinColumn({ name: "indicator_id" })
  public indicator_id: number;

  @Column({ type: "double" })
  public value: number;

  @Column({ type: "int4" })
  public year: number;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
