import { Injectable } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { UserIdRequestParamsDto } from '../dtos/user.dto';
import { UserDto } from '../dtos/user.dto';
import { CreateUserCommand } from '../commands/impl/create-user.command';

@Injectable()
export class UsersService {
  constructor(private readonly commandBus: CommandBus) {}

  async createUser(user: UserDto) {
    return await this.commandBus.execute(
      new CreateUserCommand(user),
    );
  }

  async findUsers() {
    // TODO
  }
}
