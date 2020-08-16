import { NestFactory} from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication, } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe, Logger } from '@nestjs/common';
import fastifyCors from 'fastify-cors';

async function bootstrap() {

   const app = await NestFactory.create<NestFastifyApplication>(AppModule,new FastifyAdapter());
  
  /* ---------------Swageger configurations-------------------- */     
  const documentOptions = new DocumentBuilder()
                          .setTitle('govtec')
                          .setDescription('Gov-Tec API')
                          .setVersion('1.0')
                          .setBasePath('/api')
                          .build(); 
                                        
  const document = SwaggerModule.createDocument(app, documentOptions);
  const validationOptions = {
    skipMissingProperties: true,
    validationError: { target: false },
  };
  app.useGlobalPipes(new ValidationPipe(validationOptions));
  app.setGlobalPrefix('api');
  app.register(fastifyCors, {origin: true});

  SwaggerModule.setup('/api', app, document);
  
  /* -------------------Swageger configurations ends--------------------- */

  await app.listen(3000);

}
bootstrap();
