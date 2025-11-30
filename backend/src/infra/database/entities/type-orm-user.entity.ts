import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("users")
export class TypeORMUserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 200 })
  name: string;

  @Column({ length: 150, unique: true })
  email: string;

  @Column({ name: "password_hash", length: 255 })
  password_hash: string;

  @Column({ default: true })
  active: boolean;

  @CreateDateColumn({ name: "created_at", type: "timestamp with time zone" })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp with time zone" })
  updated_at: Date;
}
