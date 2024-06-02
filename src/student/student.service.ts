import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StudentService {
  constructor(@InjectRepository(Student) private studentRepository: Repository<Student>,){}
 
  async create(createStudentDto:CreateStudentDto){
    return await this.studentRepository.save({...createStudentDto})
  }

  async findAll() {
    return await this.studentRepository.find()
  }

  async findOne(id: number) {
    return await this.studentRepository.findOneBy({id})
  }

  async update(id: number, updateStudentDto: UpdateStudentDto) {
    return await this.studentRepository.update(id,updateStudentDto)
  }

  async remove(id: number) {
    return await this.studentRepository.delete(id)
  }
}
