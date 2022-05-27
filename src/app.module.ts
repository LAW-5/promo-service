import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Promo } from './promo/promo.entitiy';
import { PromoModule } from './promo/promo.module';
import 'dotenv/config';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [Promo],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    PromoModule,
  ],
})
export class AppModule {}
