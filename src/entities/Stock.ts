import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import { Dvd } from "./Dvd";

@Entity("stock")
export class Stock {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column({ type: "int" })
  quantity: number;

  @Column({ type: "float" })
  price: number;
}
