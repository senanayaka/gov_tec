
import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { StudentCreatedEvent } from '../impl/student-created.event';
import { Logger } from '@nestjs/common';

@EventsHandler(StudentCreatedEvent)
export class StudentCreatedHandler  implements IEventHandler<StudentCreatedEvent> {

  handle(event: StudentCreatedEvent) {

    console.log( 'StudentCreatedEvent>>>>--->>>>>>'  , event);  
    
 

  }

}
