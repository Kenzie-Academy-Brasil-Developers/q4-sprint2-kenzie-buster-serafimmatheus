import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from "typeorm";
import { compare } from "bcryptjs";
import { Cart } from "./Cart";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  isAdm: boolean;

  @OneToMany(() => Cart, (cart) => cart.user)
  cart: Cart[];

  comparePWD = async (comparePassword: string) => {
    return await compare(comparePassword, this.password);
  };
}
