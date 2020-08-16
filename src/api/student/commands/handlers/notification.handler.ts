import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { NotificationCommand } from '../impl/notification.command';
import { StudentRepository } from '../../repository/student.repository';

@CommandHandler(NotificationCommand)
export class notificationHandler implements ICommandHandler<NotificationCommand> {
  
  constructor( private readonly repository: StudentRepository,
               private readonly publisher: EventPublisher) {

    }

  async execute(command: NotificationCommand) {
  
    return await this.repository.notifyStudent(command.studentDto);

  }
  
}
