import { CqrsModule } from '@nestjs/cqrs';
import { Module } from '@nestjs/common';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { StudentController } from './controllers/student.controller';
import { StudentRepository } from './repository/student.repository';
import { StudentService } from './services/student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [CqrsModule, TypeOrmModule.forRoot()],
  controllers: [StudentController],
  providers: [
    StudentRepository,
    StudentService,
    ...CommandHandlers,
    ...EventHandlers
  ],
})
export class StudentModule{}

