import { StudentController  } from '../api/student/controllers/student.controller';
import { StudentService   } from '../api/student/services/student.service';
import { CommandBus } from '@nestjs/cqrs';
import *  as student_results_mock  from  './data/student_result_mock.json'
import *  as student_request_mock  from  './data/student_request_mock_data.json'

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

      expect(await studentController.createStudent(student_request_mock)).toEqual(['Successfully Registered']);

    });

    it('should return an array of cats', async () => {
     
      jest.spyOn(studentService, 'getCommonStudent').mockImplementation(async() => student_results_mock);

      expect(await studentController.getCommonStudents({
        "teacher": "parakrama@example.com",
      })).toEqual(student_results_mock);
    });

  });

  
});