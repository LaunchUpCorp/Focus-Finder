import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();
  });

  describe('findAllUsers', () => {
    it('should return all the users', () => {
      const appController = app.get(AppController);
      expect(appController.findAll()).toBe(['Matthew', 'Hyunchol', 'Youssef']);
    });
  });
});
