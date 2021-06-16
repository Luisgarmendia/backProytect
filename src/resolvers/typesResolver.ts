import {
  Resolver,
  Mutation,
  Arg,
  Int,
  Query,
  InputType,
  Field
} from "type-graphql";
import { Type } from "../entity/types";
import { Employees } from "../entity/Employees";
@InputType()
class TypeInput{
  @Field()
  name!: string;

  @Field()
  color!: string;
}

@InputType()
class TypeUpdateInput {
  @Field(() => String, {nullable: true})
  name?: string;

  @Field(() => String, {nullable: true})
  color?: string;
}

@Resolver()
export class TypeResolver{
  @Mutation(() => Type)
  async createType(
    @Arg("data", () => TypeInput) variables: TypeInput
  ) {
    const newType = Type.create(variables);
    return await newType.save();
  }

    @Mutation(() => Boolean)
  async updateType(
    @Arg("id") id: string,
    @Arg("fields", () => TypeUpdateInput) fields: TypeUpdateInput
  ) {
    var res = await Type.update(id , fields);
    console.log(id, res)
    return true;
  }

  @Mutation(() => Boolean)
  async deleteType( @Arg("id") id: string,) {

    var data = await Employees.find({where:{
     "type._id":id
      
    }});
    console.log(data);
    
    if(data.length > 0)return false;
    await Type.delete(id);
    return true;

  }

  @Query(() => [Type])
  typesList() {
    return Type.find();
  }
}