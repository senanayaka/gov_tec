import { StudentController  } from '../api/student/controllers/student.controller';
import { StudentService   } from '../api/student/services/student.service';
import { CommandBus } from '@nestjs/cqrs';
import *  as student_mock  from  './data/student_mock.json'

describe('CatsController', () => {
  let studentController: StudentController;
  let studentService: StudentService;
  let commandBus: CommandBus;

  beforeEach(() => {
    studentService = new StudentService(commandBus);
    studentController = new StudentController(studentService);
  });
  describe('#Test Create Student', () => {
    it('#Should Return Success Message', async () => {
      const result = ['Successfully Registered'];
      jest.spyOn(studentService, 'createStudent').mockImplementation(async() => result);

      expect(await studentController.createStudent(student_mock.student_request_mock_data)).toEqual(['Successfully Registered']);

    });

    it('#Should Return An Student Json', async () => {
     
      jest.spyOn(studentService, 'getCommonStudent').mockImplementation(async() => student_mock.student_result_mock_data);

      expect(await studentController.getCommonStudents({
        "teacher": "parakrama@example.com",
      })).toEqual(student_mock.student_result_mock_data);
    });

  });

  
});