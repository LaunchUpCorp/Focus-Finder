import { Field, InputType, GraphQLTimestamp, Int } from '@nestjs/graphql';

@InputType()
export class CreateaActivityInput {
  @Field()
  url: string;

  @Field(() => GraphQLTimestamp)
  startTime: Date;

  @Field(() => GraphQLTimestamp)
  endTime: Date;

  @Field(() => Int)
  userId: number;
}
