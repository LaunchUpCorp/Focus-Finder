import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  findAllUsers(): string[] {
    return ['Matthew', 'Hyunchol', 'Youssef'];
  }
}
