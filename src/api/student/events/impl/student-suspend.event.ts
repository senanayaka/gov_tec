import { IEvent } from '@nestjs/cqrs';
import { StudentDto } from '../../models/dtos/student.dto';

export class StudentSuspendEvent implements IEvent {
  constructor(public readonly studentId: StudentDto) {}
}