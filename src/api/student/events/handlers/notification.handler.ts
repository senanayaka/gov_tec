import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { NotificationEvent } from '../impl/notification.event';

@EventsHandler(NotificationEvent)
export class NotificationHandler implements IEventHandler<NotificationEvent> {
  handle(event: NotificationEvent) {
    console.log( 'NotificationEvent---->>>>>>' ,  event); // write here
  }
}
