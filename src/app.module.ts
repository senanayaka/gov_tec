import { Module } from '@nestjs/common';
import { StudentModule } from './api/student/student.module';
import { dataBase }  from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';


@Module({
  imports: [
    StudentModule,
    ConfigModule.forRoot({
      load: [configuration],
    }),
    TypeOrmModule.forRoot()]
})
export class AppModule {

  //After module initialization - (Lifecycle event)
  async onModuleInit() {

     //database connection
     await dataBase.connect().then(()=>console.log('Successfully connected to database')).catch((err)=>console.log(err));

  }

}
