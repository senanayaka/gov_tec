import { Injectable, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ICommand } from '@nestjs/cqrs';
import { StudentCreatedEvent } from '../events/impl/student-created.event';
import { NotificationCommand } from '../commands/impl/notification.command';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class StudentSagas {
  studentCreated = (events$: any): Observable<ICommand> => {
    return events$
      .ofType(StudentCreatedEvent)
      .pipe(
        delay(1000),
        map(event => {
          Logger.log('Inside [studentIdSagas] Saga', 'studentIdSagas');
          const studentId = '1';
          return new NotificationCommand(studentId);
        }),
      );
  }
}
