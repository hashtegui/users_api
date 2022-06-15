import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "user" })
export class User {
  @PrimaryGeneratedColumn({ name: "id" })
  id!: number;
  @Column({ name: "name" })
  name!: string;
  @Column({ name: "email" , unique: true})
  email!: string;
}
