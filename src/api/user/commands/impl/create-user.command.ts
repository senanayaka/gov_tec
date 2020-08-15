import { ICommand } from '@nestjs/cqrs';

export class CreateUserCommand implements ICommand {
  constructor(
    public readonly userDto: any,
  ) {
    let userId: Number;
    let email: string;
    let type: string;
    let relation: string;
  }
}
