import { ObjectType, Field, GraphQLTimestamp } from '@nestjs/graphql';

@ObjectType()
export class Activity {
  @Field()
  id: string;

  @Field()
  url: string;

  @Field(() => GraphQLTimestamp)
  startTime: Date;

  @Field(() => GraphQLTimestamp)
  endTime: Date;

  @Field()
  userId: string;
}
