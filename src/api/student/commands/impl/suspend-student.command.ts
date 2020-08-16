import { ICommand } from '@nestjs/cqrs';

export class SuspendStudentCommand implements ICommand {
  constructor(public readonly studentDto ) {}
}
