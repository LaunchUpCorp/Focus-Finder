import { ObjectType, Int, Field, GraphQLTimestamp } from '@nestjs/graphql';

@ObjectType()
export class Activity {
  @Field(() => Int)
  id: number;

  @Field()
  url: string;

  @Field(() => GraphQLTimestamp)
  startTime: Date;

  @Field(() => GraphQLTimestamp)
  endTime: Date;

  @Field(() => Int)
  userId: number;
}
