import { createConnection } from 'typeorm';
import { UserEntity } from '../api/user/entity/UserEntity';
import { Student } from '../api/student/models/student.entity';

export class database{

    static connect = (): Promise<any>=>{
      return createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "Qaz1Wsx2",
            database: "gov_tec_db",
            entities: [
                Student
            ],
            synchronize: true,
            logging: false
        }).then((success)=>{
            return success;
        }).catch((err)=>{
            return err;
        });

    }

}
 