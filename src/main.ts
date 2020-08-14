import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe, Logger } from '@nestjs/common';
import fastifyCors from 'fastify-cors';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const documentOptions = new DocumentBuilder()
                          .setTitle('govtec')
                          .setDescription('Users API Microservice')
                          .setVersion('1.0')
                          .setBasePath('/api')
                          .build();

  /* Swageger configurations */                        
  const document = SwaggerModule.createDocument(app, documentOptions);

  const validationOptions = {
    skipMissingProperties: true,
    validationError: { target: false },
  };

  app.useGlobalPipes(new ValidationPipe(validationOptions));
  app.setGlobalPrefix('v1');
  
  SwaggerModule.setup('/api', app, document);
  /* Swageger configurations ends */

  await app.listen(3000);

}
bootstrap();
