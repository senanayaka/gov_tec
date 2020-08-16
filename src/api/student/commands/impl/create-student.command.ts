import { ICommand } from '@nestjs/cqrs';

export class CreateStudentCommand implements ICommand {
  constructor(public readonly studentDto: any) {}
}
