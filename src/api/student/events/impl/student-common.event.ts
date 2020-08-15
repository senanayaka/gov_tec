import { IEvent } from '@nestjs/cqrs';
import { StudentDto } from '../../models/dtos/student.dto';

export class StudentCommonEvent implements IEvent {
  constructor(
    public readonly studentDto: StudentDto) {}
}
