import { MigrationInterface, QueryRunner, getRepository } from "typeorm";
import { Student } from "../api/student/models/student.entity";

export class CreateAdminUser1547919837483 implements MigrationInterface {
  
  public async up(queryRunner: QueryRunner): Promise<any> {

    let student = new Student();
      

    const userRepository = getRepository(Student);
    await userRepository.save(student);

  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    //::To Do - para
  }
}