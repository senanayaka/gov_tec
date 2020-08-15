import { ICommand } from '@nestjs/cqrs';

export class CreateStudentCommand implements ICommand {
  constructor(public readonly studentDto: any) {
    let studentId: Number;
    let email: string;
    let type: string;
    let relation: string;
  }
}
