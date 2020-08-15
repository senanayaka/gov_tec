import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { NotificationCommand } from '../impl/notification.command';
import { StudentRepository } from '../../repository/student.repository';
import { Logger } from '@nestjs/common';

@CommandHandler(NotificationCommand)
export class notificationHandler
  implements ICommandHandler<NotificationCommand> {
  constructor(
    private readonly repository: StudentRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: NotificationCommand,) {
   
    const user = this.publisher.mergeObjectContext(
       await this.repository.notifyStudent(command),
    );
    user.commit();

  }
  
}
