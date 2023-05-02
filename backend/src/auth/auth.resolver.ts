import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { SignupInput } from './dto/signup.input';
import { SignResponse } from './dto/sign-response';
import { SigninInput } from './dto/signin.input';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => SignResponse)
  signup(@Args('signupInput') signupInput: SignupInput) {
    return this.authService.signup(signupInput);
  }

  @Mutation(() => SignResponse)
  signin(@Args('signinInput') signinInput: SigninInput) {
    return this.authService.signup(signinInput);
  }

  @Mutation(() => Boolean)
  logout(@Args('id', { type: () => String }) id: string) {
    return this.authService.logout(id);
  }
}
