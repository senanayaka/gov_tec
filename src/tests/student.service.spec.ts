import { StudentController as CatsController } from '../api/student/controllers/student.controller';
import { StudentService as CatsService } from '../api/student/services/student.service';
import { CommandBus } from '@nestjs/cqrs';

describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatsService;
  let commandBus: CommandBus;

  beforeEach(() => {
    catsService = new CatsService(commandBus);
    catsController = new CatsController(catsService);
  });

  describe('#Test Create Student', () => {
    it('should return an array of cats', async () => {
      const result = ['Successfully Registered'];
      jest.spyOn(catsService, 'createStudent').mockImplementation(async() => result);

      expect(await catsController.createStudent({
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