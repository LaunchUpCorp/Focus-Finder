import { Injectable } from '@nestjs/common';
import { SignupInput } from './dto/signup.input';
import { SigninInput } from './dto/signin.input';
import { UpdateAuthInput } from './dto/update-auth.input';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  async signup(signupInput: SignupInput) {
    const hashedPassword = await argon.hash(signupInput.password);
    // Save the hashed password and signup email into db
    const user = {
      id: '1hh1h1h1hh1h1h1hh1h1h1',
      email: 'cool@cool.cool',
    };
    const { accessToken, refreshToken } = await this.createTokens(
      user.id,
      user.email,
    );
    this.updateRefreshToken(user.id, refreshToken);
    return { accessToken, refreshToken, user };
  }

  async signin(signinInput: SigninInput) {
    // Query for email in db
    // verify password with argon2
    // create new tokens
    // update refreshtoken in db
    // return tokens
  }

  async createTokens(userId: string, email: string) {
    const accessToken = this.jwtService.sign(
      {
        userId,
        email,
      },
      {
        expiresIn: '24h',
        secret: this.configService.get('JWT_ACCESS_TOKEN_SECRET'),
      },
    );
    const refreshToken = this.jwtService.sign(
      {
        userId,
        email,
        accessToken,
      },
      {
        expiresIn: '7d',
        secret: this.configService.get('JWT_REFRESH_TOKEN_KEY'),
      },
    );
    return { accessToken, refreshToken };
  }

  async updateRefreshToken(userId: string, refreshToken: string) {
    const hashedRefreshToken = await argon.hash(refreshToken);
    // search db for userId and update the refresh token
  }
}
