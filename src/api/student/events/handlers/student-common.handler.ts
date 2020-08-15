import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { StudentCommonEvent } from '../impl/student-common.event';
import { Logger } from '@nestjs/common';

@EventsHandler(StudentCommonEvent)
export class StudentCommonHandler
  implements IEventHandler<StudentCommonEvent> {
  handle(event: StudentCommonEvent) {
    Logger.log(event, 'StudentCommonEvent'); // write here
  }
}
