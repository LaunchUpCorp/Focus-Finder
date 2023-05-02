import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { UserResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService, PrismaService, UserResolver],
})
export class UsersModule {}
