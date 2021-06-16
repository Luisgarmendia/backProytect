import {
    Entity,
    Column,
    BaseEntity,
    CreateDateColumn,
    ObjectIdColumn,     
    ObjectID,
  } from "typeorm";
  import { Field, ID, Int, ObjectType } from "type-graphql";
import { Type } from "./types";
  
  @ObjectType()
  @Entity({name: "employees"})
  export class Employees extends BaseEntity {
    @Field(() => ID)
    @ObjectIdColumn()
    _id!: ObjectID;
  
    @Field()
    @Column()
    name!: string;
    
    @Field(() => Int)
    @CreateDateColumn({ type: "timestamp" })
    createdAt!: number;

    @Field(() => Type)
    @Column(()=>Type)
    type!: Type;

  }
  