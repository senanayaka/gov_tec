import { CqrsModule } from '@nestjs/cqrs';
import { Module } from '@nestjs/common';
import { CommandHandlers } from './commands/handlers';
import { EventHandlers } from './events/handlers';
import { UsersController } from './controllers/user.controller';
import { UserRepository } from './repository/user.repository';
import { UsersSagas } from './sagas/users.sagas';
import { QueryHandlers } from './queries/handlers';
import { UsersService } from './services/users.service';

@Module({
  imports: [CqrsModule],
  controllers: [UsersController],
  providers: [
    UserRepository,
    ...CommandHandlers,
    ...EventHandlers,
    ...QueryHandlers,
    UsersSagas,
    UsersService
  ],
})
export class UsersModule{}
