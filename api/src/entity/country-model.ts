import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "country" })
export class CountryModel {
  @PrimaryGeneratedColumn("uuid")
  public id: number;

  @Column({ type: "varchar", length: 100 })
  public name: string;

  @Column({ type: "varchar", length: 3 })
  public code: string;

  @Column({ type: "varchar", length: 100 })
  public region: string;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
