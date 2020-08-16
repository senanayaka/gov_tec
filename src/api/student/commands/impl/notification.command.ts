import { ICommand } from '@nestjs/cqrs';

export class NotificationCommand implements ICommand {
  constructor(public readonly studentDto: any ) {}
}
