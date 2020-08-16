import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { NotificationEvent } from '../impl/notification.event';

@EventsHandler(NotificationEvent)
export class NotificationHandler implements IEventHandler<NotificationEvent> {
  handle(event) {
    //Todo
    console.log(event, 'NotificationHandler'); 
  }
}
