import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../impl/create-user.command';
import { UserRepository } from '../../repository/user.repository';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler
  implements ICommandHandler<CreateUserCommand> {

  //constructor DI for repository and event publisher
  constructor(
    private readonly repository: UserRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateUserCommand) {
   
    console.log('command--->>>>>' , command)


    const user = this.publisher.mergeObjectContext(
      await this.repository.findOneById(1),
    );
    user.addItem(1);
    user.commit();
    
  }

}
