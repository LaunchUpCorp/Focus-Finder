import { ObjectType, Int, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  userId: number;

  @Field()
  email: string;
}
