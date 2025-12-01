import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("products")
export class TypeORMProductEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ length: 200 })
  name: string;

  @Column({ type: "text", nullable: true })
  description?: string | null;

  @Column({ type: "decimal", precision: 10, scale: 2 })
  price: number;

  @Column({ type: "int" })
  stock: number;

  @Column({ default: true })
  active: boolean;

  @CreateDateColumn({ name: "created_at", type: "timestamp with time zone" })
  created_at: Date;

  @UpdateDateColumn({ name: "updated_at", type: "timestamp with time zone" })
  updated_at: Date;
}
