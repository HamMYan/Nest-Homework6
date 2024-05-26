import { InjectRepository } from '@nestjs/typeorm';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Injectable } from '@nestjs/common';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupService {
  constructor(@InjectRepository(Group) private groupRepository: Repository<Group>){}
  async create(createGroupDto: CreateGroupDto) {
    return await this.groupRepository.create({...createGroupDto})
  }

  async findAll() {
    return `This action returns all group`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  async remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
