import { IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class StudentIdRequestParamsDto {
  @IsString()
  readonly studentEmails!: string;
}

export class StudentDto {

  @ApiProperty({ example: 'teacherken@gmail.com', description: 'Provide teacher email ' })
  @IsEmail()
  readonly teacher!: any;

  @ApiProperty({ example: '[studentjon@example.com , studenthon@example.com]', description: 'Provide students emails' })
  readonly students!: any;

  
 
}