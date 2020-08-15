import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CreateStudentCommand } from '../impl/create-student.command';
import { StudentRepository } from '../../repository/student.repository';

@CommandHandler(CreateStudentCommand)
export class CreateStudentHandler
  implements ICommandHandler<CreateStudentCommand> {

  //constructor DI for repository and event publisher
  constructor(
    private readonly repository: StudentRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute( command: CreateStudentCommand) {
   
    const {studentDto} = command;
   
    let teacher = studentDto.teacher;
    let Studs = studentDto.students
 
    let students = await Studs.map(stu => (
              { email : stu,
                teacherEmail: teacher, 
                suspend : 'false', 
                createdAt: '2020-02-02',
                updatedAt : '2020-02-02' 
              }));

              console.log('students' , students)

        try {
          
          return await this.repository.createStudent(students);
          
        } catch (e) {
 
          return e;

        }
    
  }

}
