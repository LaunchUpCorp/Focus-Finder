import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetUserArgs {
  @Field(() => Int)
  userId: number;
}
