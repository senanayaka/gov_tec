import { IEvent } from '@nestjs/cqrs';

export class NotificationEvent implements IEvent {
  
  constructor(public readonly studentId: string) {}

}

