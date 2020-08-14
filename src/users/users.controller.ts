import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { UserIdRequestParamsDto } from '../users/dtos/users.dto';
import { UserDto } from '../users/dtos/users.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './commands/impl/create-user.command';


@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private readonly commandBus: CommandBus,
              private readonly queryBus: QueryBus) { }

  /* Create User */
  /*--------------------------------------------*/

  @Post('/create')
  async createUser(@Param('id') id: string, @Body() dto: UserDto) {
    return this.commandBus.execute(new CreateUserCommand(id));
  }

  @Post('/update')
  async updateUser(@Param('id') id: string, @Body() dto: UserDto) {
    return this.commandBus.execute(new CreateUserCommand(id));
  }

  @Post('/delete')
  async deleteUser(@Param('id') id: string, @Body() dto: UserDto) {
    return this.commandBus.execute(new CreateUserCommand(id));
  }

  @Post('/find')
  async findUser(@Param('id') id: string, @Body() dto: UserDto) {
    return this.commandBus.execute(new CreateUserCommand(id));
  }

}
