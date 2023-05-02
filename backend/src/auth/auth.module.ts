import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtService } from '@nestjs/jwt';

@Module({
  providers: [AuthResolver, AuthService, JwtService]
})
export class AuthModule {}
