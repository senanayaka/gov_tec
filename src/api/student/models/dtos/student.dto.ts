import { IsString, IsDate, IsEmail } from 'class-validator';

export class StudentIdRequestParamsDto {
  @IsString()
  readonly userId!: string;
}

export class StudentDto {
  @IsString()
  readonly userId!: string;
  @IsEmail()
  readonly email!: string;
  @IsEmail()
  readonly teacherEmail!: string;
  @IsString()
  readonly suspend!: string;
  @IsDate()
  readonly createdAt!: string;
  @IsDate()
  readonly updatedAt!: string;
}