import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { WelcomeUserCommand } from '../impl/Welcome-user.command';
import { UserRepository } from '../../repository/user.repository';
import { Logger } from '@nestjs/common';

@CommandHandler(WelcomeUserCommand)
export class WelcomeUserHandler
  implements ICommandHandler<WelcomeUserCommand> {
  constructor(
    private readonly repository: UserRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: WelcomeUserCommand) {
    Logger.log('Async WelcomeUse ...', 'WelcomeUse');
    return;
  }
  
}
