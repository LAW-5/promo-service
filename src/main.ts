import { INestMicroservice } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';
import { protobufPackage } from './promo/promo.pb';
import 'dotenv/config';

async function bootstrap() {
  const app: INestMicroservice = await NestFactory.createMicroservice(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        url: process.env.URL,
        package: protobufPackage,
        protoPath: join('node_modules/proto/promo.proto'),
      },
    },
  );
  await app.listen();
}
bootstrap();
