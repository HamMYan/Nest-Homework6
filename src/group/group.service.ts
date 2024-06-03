import { Student } from './../student/entities/student.entity';
import { Teacher } from './../teacher/entities/teacher.entity';
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
    @InjectRepository(Teacher) private teacherRepository: Repository<Teacher>,
  ) {}

  async create(createGroupDto: CreateGroupDto) {
    const { teacherId, name } = createGroupDto;
    const teacher = await this.teacherRepository.findOneBy({
      id: teacherId,
    });
    if (teacher) {
      return await this.groupRepository.save({ name, teacher });
    } else {
      return 'Teacher not found';
    }
  }

  async findAll() {
    return await this.groupRepository.find();
  }

  async findOne(id: number) {
    return await this.groupRepository.findOne({
      where: { id },
      relations: {
        teacher: true,
        students: true,
      },
    });
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    return await this.groupRepository.update(id, updateGroupDto);
  }

  async remove(id: number) {
    return await this.groupRepository.delete(id);
  }
}
