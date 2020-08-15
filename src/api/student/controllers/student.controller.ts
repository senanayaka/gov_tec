import { Controller, Get, Post, Param, Body, HttpCode, Query } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { StudentDto } from '../models/dtos/student.dto';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateStudentCommand } from '../commands/impl/create-student.command';
import { CommonStudentCommand } from '../commands/impl/get-common-student.command';
import { SuspendStudentCommand } from '../commands/impl/suspend-student.command';
import { NotificationCommand } from '../commands/impl/notification.command';

import { StudentService } from '../services/student.service'
import { StudentRepository } from '../repository/student.repository';

@Controller('')
export class StudentController {
  constructor(private readonly commandBus: CommandBus,
              private readonly queryBus: QueryBus,
              private readonly studentService: StudentService,
              private studentRepository : StudentRepository) { }

  @ApiOperation({ summary: 'Create Student' })
  @ApiResponse({ status: 200, description: 'Create Student.' })
  @Post('/register')
  async createStudent(@Body() dto: StudentDto) {
    return this.studentService.createStudent(dto);
  }

  @Get('/commonstudents')
  @HttpCode(200)
  async getCommonStudents(@Query('teacher') dto) {
    return this.studentService.getCommonStudent(dto);
  }

  @Post('/suspend')
  async suspendStudent( @Body() dto: StudentDto) {
    return this.studentService.suspendStudent(dto);
  }

  @Post('/retrievefornotifications')
  async retrieveNotification(@Body() notificationData: string) {
    return this.studentService.notifyStudent(notificationData);
  }

}
