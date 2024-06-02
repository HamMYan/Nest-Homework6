import { InjectRepository } from '@nestjs/typeorm';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Injectable } from '@nestjs/common';
import { Group } from './entities/group.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group) private groupRepository: Repository<Group>,
  ) {}
  
  async create(createGroupDto: CreateGroupDto) {
    return await this.groupRepository.save({...createGroupDto});
  }

  async findAll() {
    return await this.groupRepository.find()
  }

  async findOne(id: number) {
    return await this.groupRepository.findOneBy({id})
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    return await this.groupRepository.update(id,updateGroupDto)
  }

  async remove(id: number) {
    return await this.groupRepository.delete(id)
  }
}
