import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { StudentSuspendEvent } from '../impl/student-suspend.event';
import { Logger } from '@nestjs/common';

@EventsHandler(StudentSuspendEvent)
export class StudentDeletedHandler
  implements IEventHandler<StudentSuspendEvent> {
  handle(event: StudentSuspendEvent) {
    Logger.log(event, 'StudentDeletedEvent'); // write here
  }
}
