import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ActivityResolver } from './activities.resolver';
import { ActivitiesService } from './activities.service';

@Module({
  providers: [PrismaService, ActivitiesService, ActivityResolver],
})
export class ActivitiesModule {}
