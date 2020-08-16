import { IsString, IsDate, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class StudentIdRequestParamsDto {
  @IsEmail()
  readonly teacher!: string;
  @IsString()
  readonly notification!: string;
}

export class NotificationDto {
  @ApiProperty({ example: 'teacherken@example.com', description: 'The name of the Cat' })
  @IsEmail()
  teacher!: string;

  @ApiProperty({ example: 'Hello students! dddd @studentagnes@example.com @studentmiche@example.com', description: 'String to Hello student' })
  @IsString()
  notification!: string;
 
}