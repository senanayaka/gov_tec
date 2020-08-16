import { Module } from '@nestjs/common';
import { StudentModule } from './api/student/student.module';
import { dataBase }  from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './api/student/models/student.entity';


@Module({
  imports: [
    StudentModule,
    TypeOrmModule.forRoot({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: 'root',
            password: 'Qaz1Wsx2',
            database: 'gov_tec_db',
            entities: [
                Student
            ],
            synchronize: true,
            logging: false
    })]
})
export class AppModule {

  //After module initialization - (Lifecycle event)
  async onModuleInit() {

     //database connection
     await dataBase.connect().then(()=>console.log('Successfully connected to database')).catch((err)=>console.log(err));

  }

}
