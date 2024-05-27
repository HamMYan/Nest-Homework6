import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { GroupModule } from './group/group.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Teacher } from './teacher/entities/teacher.entity';
import { Student } from './student/entities/student.entity';
import { Group } from './group/entities/group.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      username: 'root',
      password: '',
      database: 'nest6_homework',
      host: 'localhost',
      port: 3306,
      entities: [Teacher, Group, Student],
      synchronize: true
    }),
    TeacherModule, StudentModule, GroupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
