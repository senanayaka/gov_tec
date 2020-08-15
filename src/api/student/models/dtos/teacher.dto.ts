import { IsString, IsDate, IsEmail } from 'class-validator';

export class TeacherDto {
  @IsString()
  readonly userId!: string;
  @IsEmail()
  readonly email!: string;
  @IsDate()
  readonly createdAt!: string;
  @IsDate()
  readonly updatedAt!: string;
}