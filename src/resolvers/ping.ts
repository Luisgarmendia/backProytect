import {Mutation, Query, Resolver} from 'type-graphql'
import { Employees } from '../entity/Employees';
import { Type } from '../entity/types'

@Resolver()
export class PingResolver {
  @Mutation(()=> Boolean)
  async deleteAll(){
    const dataType = await Type.find() 
    await Type.remove(dataType)
    const dataEmployees = await Employees.find()
    await Employees.remove(dataEmployees);
    return true;
  }
}