import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ActivitiesService } from './activities.service';
import { CreateaActivityInput } from './dto/input/create-activity.input';
import { Activity } from './models/activity.model';

@Resolver(() => Activity)
export class ActivityResolver {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Mutation(() => Activity)
  async createActivity(
    @Args('createActivityData') createActivityData: CreateaActivityInput,
  ): Promise<Activity> {
    return this.activitiesService.createActivity(createActivityData);
  }
}
