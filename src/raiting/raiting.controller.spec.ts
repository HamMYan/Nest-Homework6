import { Test, TestingModule } from '@nestjs/testing';
import { RaitingController } from './raiting.controller';
import { RaitingService } from './raiting.service';

describe('RaitingController', () => {
  let controller: RaitingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RaitingController],
      providers: [RaitingService],
    }).compile();

    controller = module.get<RaitingController>(RaitingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
