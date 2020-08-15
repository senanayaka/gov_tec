import { Injectable, HttpStatus } from '@nestjs/common';
import { StudentModel } from '../models/student.model';
import { StudentDto } from '../models/dtos/student.dto'
import { Student } from '../models/student.entity';
import { EntityRepository, Repository, getRepository, In} from 'typeorm';

@EntityRepository(Student)
export class StudentRepository extends Repository<Student> {
  
  async createStudent(studentDto:StudentDto) {
  
    const student = new StudentModel();
    return await student.createStudent(studentDto);
     
  }
 
  async getCommonStudents({ TeacherDto } :any) {
    
    if(!Array.isArray(TeacherDto)){
      TeacherDto = [TeacherDto];
    }
    const userRepository = getRepository(Student);
    return await userRepository.find({ teacherEmail : In(TeacherDto)});
 
  }

  async suspendStudent(studentDto) {

    const student = new StudentModel();
    student.suspendStudent(studentDto);
    return student;

  }
 

  async notifyStudent(studentDto) {
    
    const student = new StudentModel();
    student.notification(studentDto);
    return student;

  }

  async findAll(): Promise<StudentModel[]> {
    return;
  }
}
