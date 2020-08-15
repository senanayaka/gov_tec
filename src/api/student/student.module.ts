import { CqrsModule } from '@nestjs/cqrs';
import { Module } from '@nestjs/common';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { StudentController } from './controllers/student.controller';
import { StudentRepository } from './repository/student.repository';
import { StudentSagas } from './sagas/student.sagas';
import { StudentService } from './services/student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './models/student.entity';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Student])],
  controllers: [StudentController],
  providers: [
    StudentRepository,
    ...CommandHandlers,
    ...EventHandlers,
    StudentSagas,
    StudentService
  ],
})
export class StudentModule{}
