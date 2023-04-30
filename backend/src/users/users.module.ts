import { Module } from '@nestjs/common';
import { UserResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService, UserResolver],
})
export class UsersModule {}
