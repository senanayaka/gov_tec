import { Controller, Get, Post, Param, Body, HttpCode, Query } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { StudentDto } from '../models/dtos/student.dto';
import { CommonStudentDto } from '../models/dtos/common-student.dto';
import { SuspendDto } from '../models/dtos/suspend.dto';
import { NotificationDto } from '../models/dtos/notification.dto';
import { StudentService } from '../services/student.service'

@Controller('')
export class StudentController {

  constructor(private readonly studentService: StudentService) {}

  /* Student registration */
  @ApiOperation({ summary: 'Create Student' })
  @ApiResponse({ status: 200, description: 'Create Student.', type: StudentDto })
  @Post('/register')
  async createStudent(@Body() dto: StudentDto): Promise<StudentDto> {

    return this.studentService.createStudent(dto);

  }

  /* Get common students */
  @ApiOperation({ summary: 'Get Common Students' })
  @Get('/commonstudents')
  @HttpCode(200)
  @ApiResponse({ status: 200, description: 'Get Common Students.', type: CommonStudentDto })
  async getCommonStudents(@Query('teacher') dto): Promise<CommonStudentDto> {

    return this.studentService.getCommonStudent(dto);

  }

  /* Suspend students */
  @ApiOperation({ summary: 'Suspend Student' })
  @Post('/suspend')
  @ApiResponse({ status: 200, description: 'Suspend Student.', type: SuspendDto })
  async suspendStudent( @Body() dto: SuspendDto): Promise<SuspendDto> {

    return this.studentService.suspendStudent(dto);

  }

  /* Send notification to students and get back who receive notifications */
  @ApiOperation({ summary: 'Retrieve Notification.' })
  @Post('/retrievefornotifications')
  @ApiResponse({ status: 200, description: 'Retrieve Notification.', type: NotificationDto })
  async retrieveNotification(@Body() notificationData: NotificationDto): Promise<NotificationDto> {

    return this.studentService.notifyStudent(notificationData);

  }

}
