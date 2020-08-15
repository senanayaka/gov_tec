import { IEvent } from '@nestjs/cqrs';
import { StudentDto } from '../../models/dtos/student.dto';

export class StudentCreatedEvent implements IEvent {
  constructor(
    public readonly studentDto: StudentDto) {}
}
