import { Field, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/models/user.model';

@ObjectType()
export class SignResponse {
  @Field()
  accessToken: string;

  @Field()
  refreshToken: string;

  @Field()
  user: User;
}
