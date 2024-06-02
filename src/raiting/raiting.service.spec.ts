import { Test, TestingModule } from '@nestjs/testing';
import { RaitingService } from './raiting.service';

describe('RaitingService', () => {
  let service: RaitingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RaitingService],
    }).compile();

    service = module.get<RaitingService>(RaitingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
