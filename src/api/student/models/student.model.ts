import { AggregateRoot } from '@nestjs/cqrs';
import { StudentCreatedEvent } from '../events/impl/student-created.event';
import { StudentCommonEvent } from '../events/impl/student-common.event';
import { StudentSuspendEvent } from '../events/impl/student-suspend.event';
import { NotificationEvent } from '../events/impl/notification.event';
import { getRepository, In } from "typeorm";
import { Student } from "./student.entity";

export class StudentModel extends AggregateRoot {
  
  [x: string]: any;

    constructor() {

      super();
      const studentRepository = getRepository(Student);
      
    }

    async createStudent(studentDto){
      
      const studentRepository = getRepository(Student);

      try {
          const studentUpdate = await studentRepository.save( studentDto );  

          this.apply(new StudentCreatedEvent(studentDto.student));

          return studentUpdate;

        } catch (e) {

          return e;

        }
      }

    async getCommonStudents(TeacherDto){
       
      if(!Array.isArray(TeacherDto)){
        TeacherDto = [TeacherDto];
      }
      const userRepository = getRepository(Student);
      
      return await userRepository.find({ teacherEmail : In(TeacherDto)});

    }


    async suspendStudent(studentDto) {

      const studentRepository = getRepository(Student);

      let studentToUpdate =  await studentRepository.find({ email : studentDto.student });
  
      if(studentToUpdate != undefined){

          const updatedDataArray = studentToUpdate.map((student)=>{
              let temp = Object.assign({}, student);
              temp.suspend = 'true';
              return temp;
          })
      
       this.apply(new StudentSuspendEvent(updatedDataArray));
        
       return await studentRepository.save(updatedDataArray);

      }else{

        return 'No Record Found To Update'

      }
      
    }


     async notification(studentDto) {

      const studentRepository = getRepository(Student);
    
      let studentToUpdate = await studentRepository.find({ email : In(studentDto)});
 
      const updatedDataArray = studentToUpdate.map((student)=>{
          let temp = Object.assign({}, student);
          temp.notified = 'true';
          return temp;
      })
 
      this.apply(new NotificationEvent(studentDto));
  
      return await studentRepository.save(updatedDataArray);

     }
    
  }



