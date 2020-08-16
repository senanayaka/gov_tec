import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CommonStudentDto {
  @ApiProperty({ example: 'teacherken@gmail.com', description: 'Provide teacher email ' })
  @IsString()
   teacher!: any;

  @ApiProperty({ example: 'teacherken@gmail.com', description: 'Provide teacher emails' })
  @IsString()
   teacher2!: any;
}