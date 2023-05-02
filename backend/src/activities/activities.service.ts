import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateaActivityInput } from './dto/input/create-activity.input';
import { Activity } from './models/activity.model';

@Injectable()
export class ActivitiesService {
  constructor(private prisma: PrismaService) {}

  async createActivity(data: CreateaActivityInput): Promise<Activity> {
    return this.prisma.activity.create({
      data,
    });
  }
}
