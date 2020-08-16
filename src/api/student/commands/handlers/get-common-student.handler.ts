import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CommonStudentCommand } from '../impl/get-common-student.command';
import { StudentRepository } from '../../repository/student.repository';

@CommandHandler(CommonStudentCommand)
export class CommonStudentHandler implements ICommandHandler<CommonStudentCommand> {
  
  constructor(private readonly repository: StudentRepository,
              private readonly publisher: EventPublisher) {
              }
 
  async execute(command) {

     return await this.repository.getCommonStudents(command);
     
  }
}
