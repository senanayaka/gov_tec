import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { SuspendStudentCommand } from '../impl/suspend-student.command';
import { StudentRepository } from '../../repository/student.repository';

@CommandHandler(SuspendStudentCommand)
export class SuspendStudentHandler implements ICommandHandler<SuspendStudentCommand> {

  constructor(private readonly repository: StudentRepository,
              private readonly publisher: EventPublisher) {

              }

  async execute(command: SuspendStudentCommand) {
   
    return await this.repository.suspendStudent(command.studentDto);

  }


}
