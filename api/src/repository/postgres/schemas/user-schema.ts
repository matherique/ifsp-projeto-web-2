import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "user" })
export class UserSchema {
  @PrimaryGeneratedColumn()
  public id: string;

  @Column({ type: "varchar", length: 100 })
  public name: string;

  @Column({ type: "varchar", length: 100 })
  public email: string;

  @Column({ type: "varchar", length: 64 })
  public password: string;

  @CreateDateColumn()
  public created_at: Date;

  @UpdateDateColumn()
  public updated_at: Date;
}
