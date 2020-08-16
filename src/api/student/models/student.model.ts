import { AggregateRoot } from '@nestjs/cqrs';
import { StudentCreatedEvent } from '../events/impl/student-created.event';
import { StudentCommonEvent } from '../events/impl/student-common.event';
import { StudentSuspendEvent } from '../events/impl/student-suspend.event';
import { NotificationEvent } from '../events/impl/notification.event';
import { getRepository } from "typeorm";
import { Student } from "./student.entity";

export class StudentModel extends AggregateRoot {
  
  [x: string]: any;

    constructor() {

      super();
      const userRepository = getRepository(Student);
      
    }

    async createStudent(studentDto){
      
      const userRepository = getRepository(Student);

      try {
          const studentUpdate = await userRepository.save( studentDto );  

          this.apply(new StudentCreatedEvent(studentDto.student));

          return studentUpdate;

        } catch (e) {

          return e;

        }
      }

    async suspendStudent(studentDto) {

      const userRepository = getRepository(Student);
      
      console.log('studentDto.student' , studentDto.student)

      let studentToUpdate = await userRepository.findOne({ email : studentDto.student });

      console.log('studentToUpdate' , studentToUpdate)

      studentToUpdate.suspend = 'true';

      this.apply(new StudentSuspendEvent(studentDto.student));

      return await userRepository.save(studentToUpdate);
       
    }


     async notification(data) {

      console.log('data::::' , data)


      // const userRepository = getRepository(Student);
      // let studentToUpdate = await userRepository.findOne({ email : studentDto.student });
      // studentToUpdate.suspend = 'true';

      // this.apply(new StudentSuspendEvent(studentDto.student));

      // return await userRepository.save(studentToUpdate);

      //   this.apply(new NotificationEvent(data));

     }
    
  }



