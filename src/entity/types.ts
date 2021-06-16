import {
  Entity,
  Column,
  BaseEntity,
  ObjectIdColumn,
  ObjectID
} from "typeorm";
import { Field, ID, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity({name:"types"})
export class Type extends BaseEntity {

  @Field(()=>String)
  @ObjectIdColumn()
  _id!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  color!: string;
}