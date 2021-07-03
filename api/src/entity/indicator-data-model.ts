import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  UpdateDateColumn,
} from "typeorm";
import { CountryModel } from "./country-model";
import { IndicatorModel } from "./indicator-model";

@Entity({ name: "indicator_data" })
export class IndicatorDataModel {
  @OneToOne(() => CountryModel)
  @JoinColumn({ name: "country_id" })
  public country_id: number;

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
