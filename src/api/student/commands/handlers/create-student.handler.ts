import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { CreateStudentCommand } from '../impl/create-student.command';
import { StudentRepository } from '../../repository/student.repository';

@CommandHandler(CreateStudentCommand)
export class CreateStudentHandler implements ICommandHandler<CreateStudentCommand> {

  //constructor DI for repository and event publisher
  constructor(private readonly repository: StudentRepository,
              private readonly publisher: EventPublisher) {}
  
  async execute( command: CreateStudentCommand) {
   
    const {studentDto} = command;
    let teacher = studentDto.teacher;
    let Studs = studentDto.students;
    
    //create student object 
    let students = await Studs.map(stu => (
              { email : stu,
                teacherEmail: teacher, 
                suspend : 'false', 
                notified: 'false',
                createdAt: new Date(),
                updatedAt : new Date() 
              }));

    //insert data to database
    return this.repository.createStudent(students).then(()=>'Successfully Registered')
                                                  .catch((error)=>error);
      
  }

}
