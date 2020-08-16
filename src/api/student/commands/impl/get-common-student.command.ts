import { ICommand } from '@nestjs/cqrs';

export class CommonStudentCommand implements ICommand {
  constructor( public readonly TeacherDto: any) {}
}
