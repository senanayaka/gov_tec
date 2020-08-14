import { Injectable, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { ICommand } from '@nestjs/cqrs';
import { UserCreatedEvent } from '../events/impl/user-created.event';
import { WelcomeUserCommand } from '../commands/impl/welcome-user.command';
import { delay, map } from 'rxjs/operators';

@Injectable()
export class UsersSagas {
  userCreated = (events$: any): Observable<ICommand> => {
    return events$
      .ofType(UserCreatedEvent)
      .pipe(
        delay(1000),
        map(event => {
          Logger.log('Inside [UsersSagas] Saga', 'UsersSagas');
          const userId = '1';
          return new WelcomeUserCommand(userId);
        }),
      );
  }
}
