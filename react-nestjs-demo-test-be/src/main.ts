import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { GraphQLSchemaHost } from '@nestjs/graphql';
import { writeFileSync } from 'fs';
import { printSchema } from 'graphql';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      // forbidUnknownValues: false,
      // exceptionFactory: (e) => {
      //   console.error(e);
      //   throw new BadRequestException('You shall not pass!');
      // },
    }),
  );

  await app.listen(3001);

  const { schema } = app.get(GraphQLSchemaHost);
  writeFileSync(join(process.cwd(), `schema.gql`), printSchema(schema));
}
bootstrap();
