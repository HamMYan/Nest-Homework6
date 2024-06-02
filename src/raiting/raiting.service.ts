import { Injectable } from '@nestjs/common';
import { CreateRaitingDto } from './dto/create-raiting.dto';
import { UpdateRaitingDto } from './dto/update-raiting.dto';

@Injectable()
export class RaitingService {
  create(createRaitingDto: CreateRaitingDto) {
    return 'This action adds a new raiting';
  }

  findAll() {
    return `This action returns all raiting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} raiting`;
  }

  update(id: number, updateRaitingDto: UpdateRaitingDto) {
    return `This action updates a #${id} raiting`;
  }

  remove(id: number) {
    return `This action removes a #${id} raiting`;
  }
}
