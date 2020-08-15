import { Entity,PrimaryGeneratedColumn,Column, Unique,CreateDateColumn,UpdateDateColumn } from "typeorm";
import { Length, IsNotEmpty } from "class-validator";
import { IsString, IsNumber, IsEmail } from 'class-validator';
import "reflect-metadata";

export class StudentIdRequestParamsDto {
  @IsString()
  readonly userId!: string;
}

@Entity()
@Unique(["id"])
export class Student{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Length(4, 20)
  email: string;

  @Column()
  @Length(4, 20)
  teacherEmail: string;
  
  @Column()
  @Length(4, 20)
  suspend: string;

  @Column()
  @CreateDateColumn()
  createdAt: string;

  @Column()
  @UpdateDateColumn()
  updatedAt: string;

}