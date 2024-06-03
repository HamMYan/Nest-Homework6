import { Group } from 'src/group/entities/group.entity';
import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
    @InjectRepository(Group) private groupRepository: Repository<Group>,
  ) {}

  async create(createStudentDto: CreateStudentDto) {
    const { name, surname, email, age, password, groupId } = createStudentDto;
    const group = await this.groupRepository.findOneBy({
      id: groupId,
    });
    if (group) {
      return await this.studentRepository.save({
        name,
        surname,
        email,
        age,
        password,
        group,
      });
    } else {
      return 'Group not found';
    }
  }

  async findAll() {
    return await this.studentRepository.find();
  }

  async findOne(id: number) {
    return await this.studentRepository.findOne({
      where:{ id },
      relations: {
        group: {
          teacher: true,
        },
      },
    });
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    await this.studentRepository.update(id, updateStudentDto);
    return 'Updated';
  }
  return;

  async remove(id: number) {
    await this.studentRepository.delete(id);
    return 'Deleted'
  }
}
