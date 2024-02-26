import { BeforeInsert, Column, Entity, Index, OneToMany } from "typeorm";
import BaseEntity from "./Entity";
import { Length } from "class-validator";
import bcrypt from "bcryptjs";
import Topic from "./Topic";
@Entity("user")
export default class User extends BaseEntity {
  @Index()
  @Column({ unique: true })
  @Length(1, 32, { message: "Username cannot be empty." })
  username: string;

  @Column()
  @Length(4, 32, { message: "Password must be at least 4 characters long." })
  password: string;

  @OneToMany(() => Topic, (topic) => topic.user)
  topics: Topic[];

  @BeforeInsert()
  async hashPashword() {
    this.password = await bcrypt.hash(this.password, 6);
  }
}
