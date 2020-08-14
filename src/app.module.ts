import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module'

@Module({
  imports: [UsersModule],
})
export class AppModule {

  //After module initialization - (Lifecycle event)
  async onModuleInit() {}

}
