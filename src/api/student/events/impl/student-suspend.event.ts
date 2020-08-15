import { IEvent } from '@nestjs/cqrs';

export class StudentSuspendEvent implements IEvent {
  constructor(
    public readonly studentId: string) {}
}