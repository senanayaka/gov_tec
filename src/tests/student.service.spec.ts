import { Test, TestingModule } from "@nestjs/testing";
import { StudentService } from '../api/student/services/student.service';

describe("-- Client Controller --", () => {
  let studentService: StudentService;
  let module: TestingModule;
  beforeAll(async () => {
   module = await Test.createTestingModule({
     controllers: [],
     providers: [
      StudentService
     ]
    }).compile();
    studentService = module.get<StudentService>(StudentService);
   
  });

  describe("* Find One By Id", () => {
    it("should return an entity of client if successful", async () => {
      const mockNumberToSatisfyParameters = 0;
      let expectedResult = 'Successfully Registered'
      jest.spyOn(studentService, "createStudent").mockResolvedValue(expectedResult);

     // expect(await clientController.findOneById(mockNumberToSatisfyParameters)).toBe(expectedResult);

    }); 
  });
 
});