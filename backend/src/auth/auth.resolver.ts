import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { SignupInput } from './dto/signup.input';
import { UpdateAuthInput } from './dto/update-auth.input';
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

  @Mutation(() => Auth)
  updateAuth(@Args('updateAuthInput') updateAuthInput: UpdateAuthInput) {
    return this.authService.update(updateAuthInput.id, updateAuthInput);
  }

  @Mutation(() => Auth)
  removeAuth(@Args('id', { type: () => Int }) id: number) {
    return this.authService.remove(id);
  }
}
