import { IsString, IsDate, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class StudentEmailRequestParamsDto {
  @IsString()
  readonly userId!: string;
}

export class SuspendDto {
  @ApiProperty({ example: 'studentjonxx@example.com', description: 'Provide suspended student email' })
  @IsEmail()
  readonly student!: string;

}