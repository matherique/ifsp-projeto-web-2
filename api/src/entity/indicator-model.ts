import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "indicator" })
export class IndicatorModel {
  @PrimaryGeneratedColumn("uuid")
  public id: number;

  @Column({ type: "varchar", length: 3 })
  public code: string;

  @Column({ type: "varchar", length: 100 })
  public name: string;

  @Column({ type: "text" })
  public note: string;

  @Column({ type: "text" })
  public source_organization: string;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
