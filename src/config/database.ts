import { createConnection } from 'typeorm';
import { Student } from '../api/student/models/student.entity';

export class database{
    static connect = (): Promise<any>=>{
      return createConnection({
            type: "mysql",
            host: process.env.HOST,
            port:  parseInt(process.env.DATABASE_PORT, 10),
            username: process.env.USER_NAME,
            password: process.env.PASSWORD,
            database: process.env.DATA_BASE,
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
 