import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { StudentSuspendEvent } from '../impl/student-suspend.event';

@EventsHandler(StudentSuspendEvent)
export class StudentDeletedHandler
  implements IEventHandler<StudentSuspendEvent> {
  handle(event: StudentSuspendEvent) {
    // Todo
    console.log('StudentDeletedEvent',event ); 
  }
}
