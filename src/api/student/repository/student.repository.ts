import { Injectable, HttpStatus } from '@nestjs/common';
import { StudentModel } from '../models/student.model';
import { StudentDto } from '../models/dtos/student.dto'
import { Student } from '../models/student.entity';
import { EntityRepository, Repository, getRepository, In} from 'typeorm';

@EntityRepository(Student)
export class StudentRepository extends Repository<Student> {
  
  async createStudent(studentDto:StudentDto) : Promise<void> {

    const student = new StudentModel();
    return await student.createStudent(studentDto);  

  }
 
  async getCommonStudents({ TeacherDto } :any) {

    const student = new StudentModel();
    return await student.getCommonStudents(TeacherDto);

  }

  async suspendStudent(studentDto) {

    const student = new StudentModel();
    return await student.suspendStudent(studentDto);

    
  }
 

  async notifyStudent(studentDto) {

    const student = new StudentModel();
    return await student.notification(studentDto);

  }

  async findAll(): Promise<StudentModel[]> {
    return;
  }
}
