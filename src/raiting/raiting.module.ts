import { Module } from '@nestjs/common';
import { RaitingService } from './raiting.service';
import { RaitingController } from './raiting.controller';

@Module({
  controllers: [RaitingController],
  providers: [RaitingService],
})
export class RaitingModule {}
