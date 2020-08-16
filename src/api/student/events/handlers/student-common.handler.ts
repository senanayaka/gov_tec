import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { StudentCommonEvent } from '../impl/student-common.event';

@EventsHandler(StudentCommonEvent)
export class StudentCommonHandler
  implements IEventHandler<StudentCommonEvent> {
  handle(event: StudentCommonEvent) {

      // Todo
    console.log(event, 'StudentCommonEvent'); 
  

  }
}
