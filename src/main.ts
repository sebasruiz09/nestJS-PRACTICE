import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function main() {
  const app = await NestFactory.create(AppModule);

  //global pipe for validation
  app.useGlobalPipes(
    new ValidationPipe({
      // delete all properties that are not defined in the DTO
      whitelist: true,
      // throw an error if the DTO has a property that is not defined in the DTO
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
main();
