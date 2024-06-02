import { PartialType } from '@nestjs/swagger';
import { CreateRaitingDto } from './create-raiting.dto';

export class UpdateRaitingDto extends PartialType(CreateRaitingDto) {}
