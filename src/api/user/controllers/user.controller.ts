import { Controller, Get, Post, Param, Body, Delete, Put } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { UserIdRequestParamsDto } from '../dtos/user.dto';
import { UserDto } from '../dtos/user.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from '../commands/impl/create-user.command';
import { UsersService } from '../services/users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly commandBus: CommandBus,
              private readonly queryBus: QueryBus,
              private readonly usersService: UsersService) { }

  @ApiOperation({ summary: 'Create User' })
  @ApiResponse({ status: 200, description: 'Create User.' })
  @Post('/token')
  async createUser(@Body() dto: UserDto) {
    this.usersService.createUser({...dto});
  }


}
