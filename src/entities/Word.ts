import { Column, Entity, ManyToOne } from "typeorm";
import BaseEntity from "./Entity";
import Topic from "./Topic";

@Entity("word")
export default class Word extends BaseEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @ManyToOne(() => Topic)
  topic: Topic;
}
