import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class DeleteUserInput {
  @Field(() => Int)
  userId: number;
}
