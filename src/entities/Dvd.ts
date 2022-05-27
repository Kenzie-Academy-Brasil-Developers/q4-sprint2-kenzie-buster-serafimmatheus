import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from "typeorm";
import { Cart } from "./Cart";
import { Stock } from "./Stock";

@Entity("dvd")
export class Dvd {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name: string;

  @Column()
  duration: string;

  @OneToOne(() => Stock, (stock) => stock.dvd)
  stock: Stock;

  @OneToMany(() => Cart, (cart) => cart.dvd)
  cart: Cart;
}
