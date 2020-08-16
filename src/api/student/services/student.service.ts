import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { StudentIdRequestParamsDto } from '../models/dtos/student.dto';
import { StudentEmailRequestParamsDto }  from '../models/dtos/suspend.dto'
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

    //trigger commandbus to trigger commands handler -> create-student.handler.ts
    return await this.commandBus.execute(
      new CreateStudentCommand(student),
    );

  }

  async getCommonStudent(teacher: TeacherDto) {

    //trigger commandbus to trigger commands handler -> get-common-student.handler.ts
    return await this.commandBus.execute(
      new CommonStudentCommand(teacher),
    );

  }

  async suspendStudent(student: any) {

    //trigger commandbus to trigger commands handler -> suspend-student.handler.ts
    return await this.commandBus.execute(
      new SuspendStudentCommand(student),
    );

  }

  async notifyStudent(student: any) {

    //check the expression stating from @ and ends with spaces
    const regx = /@(.*)\b/g;

    //mach the regular expressions
    const matches = regx.exec(student.notification);

    //map the array to get emails
    const splitedArray = matches[0].split(" ").map((email)=>email.substring(1));

    //trigger commandbus to trigger commands handler -> notificatin.handler.ts
    return await this.commandBus.execute(new NotificationCommand(splitedArray));

  }

}
