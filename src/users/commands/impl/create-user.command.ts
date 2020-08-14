import { ICommand } from '@nestjs/cqrs';

export class CreateUserCommand implements ICommand {
  constructor(
    public readonly userDto: any,
  ) {
    let userId: string;
    let firstName: string;
    let lastName: string;

  }
}
