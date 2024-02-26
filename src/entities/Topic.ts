import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import BaseEntity from "./Entity";
import User from "./User";
import Word from "./Word";

@Entity("topic")
export default class Topic extends BaseEntity {
  @Column()
  title: string;

  @Column()
  username: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "username", referencedColumnName: "username" })
  user: User;

  @OneToMany(() => Word, (word) => word.topic)
  words: Word[];
}
