import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { UserIdRequestParamsDto } from '../users/dtos/users.dto';
import { UserDto } from '../users/dtos/users.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './commands/impl/create-user.command';


@Controller('users')
export class UsersController {
  constructor(private readonly commandBus: CommandBus,
              private readonly queryBus: QueryBus) { }

  /* Create User */
  /*--------------------------------------------*/

  @ApiOperation({ summary: 'Create User' })
  @ApiResponse({ status: 200, description: 'Create User.' })
  @Post('/create')
  async createUser(@Param('id') id: string, @Body() dto: UserDto) {
      console.log('hit');
    //  return this.commandBus.execute(new CreateUserCommand(id));
  }

  @Post('/update')
  async updateUser(@Param('id') id: string, @Body() dto: UserDto) {
    return this.commandBus.execute(new CreateUserCommand(id));
  }

  @Post('/delete')
  async deleteUser(@Param('id') id: string, @Body() dto: UserDto) {
    return this.commandBus.execute(new CreateUserCommand(id));
  }

  // @ApiOperation({ summary: 'Find User' })
  // @ApiResponse({ status: 200, description: 'Find User.' })
  @Get()
  async findUser() {
   // return this.commandBus.execute(new CreateUserCommand(id));
   console.log('hello world');
   return 'Hello world findUserfindUser';
  }



}
