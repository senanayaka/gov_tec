import { StudentController  } from '../api/student/controllers/student.controller';
import { StudentService   } from '../api/student/services/student.service';
import { CommandBus } from '@nestjs/cqrs';

describe('CatsController', () => {
  let studentController: StudentController;
  let studentService: StudentService;
  let commandBus: CommandBus;

  beforeEach(() => {
    studentService = new StudentService(commandBus);
    studentController = new StudentController(studentService);
  });
  describe('#Test Create Student', () => {
    it('should return an array of cats', async () => {
      const result = ['Successfully Registered'];
      jest.spyOn(studentService, 'createStudent').mockImplementation(async() => result);

      expect(await studentController.createStudent({
        "teacher": "parakrama@example.com",
        "students":
          [
            "studentjon@example.com",
            "studenthonbcc@example.com"
          ]
      })).toEqual(['Successfully Registered']);
    });
  });


});