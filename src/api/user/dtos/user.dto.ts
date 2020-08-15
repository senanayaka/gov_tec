import { IsString, IsNumber, IsEmail } from 'class-validator';

export class UserIdRequestParamsDto {
  @IsString()
  readonly userId!: string;
}

export class UserDto {
  @IsNumber()
  readonly userId!: Number;
  @IsEmail()
  readonly email!: string;
  @IsEmail()
  readonly type!: string;
  @IsEmail()
  readonly relation!: string;
}