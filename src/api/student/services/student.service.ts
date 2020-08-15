import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { StudentIdRequestParamsDto } from '../models/dtos/student.dto';
import { StudentDto } from '../models/dtos/student.dto';
import { TeacherDto } from '../models/dtos/teacher.dto';

import { CreateStudentCommand } from '../commands/impl/create-student.command';
import { CommonStudentCommand } from '../commands/impl/get-common-student.command';
import { SuspendStudentCommand } from '../commands/impl/suspend-student.command';
import { NotificationCommand } from '../commands/impl/notification.command';

@Injectable()
export class StudentService {
  constructor(private readonly commandBus: CommandBus) {}

  async createStudent(student: StudentDto) {
    return await this.commandBus.execute(
      new CreateStudentCommand(student),
    );
  }

  async getCommonStudent(teacher: TeacherDto) {
    return await this.commandBus.execute(
      new CommonStudentCommand(teacher),
    );
  }

  async suspendStudent(student: StudentIdRequestParamsDto) {
    return await this.commandBus.execute(
      new SuspendStudentCommand(student),
    );
  }
  async notifyStudent(student: string) {
    return await this.commandBus.execute(
      new NotificationCommand(student),
    );
  }

  async findStudent() {
    // TODO
  }
}
