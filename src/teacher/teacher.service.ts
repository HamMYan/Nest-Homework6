import { Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TeacherService {
  constructor(
    @InjectRepository(Teacher)
    private teacherRepository: Repository<Teacher>,
  ) {}

  async create(createTeacherDto: CreateTeacherDto){
    return await this.teacherRepository.save({...createTeacherDto});
  }
  async findAll() {
    return await this.teacherRepository.find()
  }

  async findOne(id: number) {
    return await this.teacherRepository.findOne({
      where: { id },
      relations: {
        group: true,
      },
    });
  }

  async update(id: number, updateTeacherDto: UpdateTeacherDto) {
    return await this.teacherRepository.update(id,updateTeacherDto)
  }

  async remove(id: number) {
    return await this.teacherRepository.delete(id)
  }
}
