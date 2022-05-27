import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import { format, transports } from 'winston';
import { PromoController } from './promo.controller';
import { Promo } from './promo.entitiy';
import { PromoService } from './promo.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Promo]),
    WinstonModule.forRoot({
      format: format.combine(
        format.timestamp({ format: 'isoDateTime' }),
        format.json(),
      ),
      transports: [
        new transports.File({
          filename: 'src/log/logger.log',
        }),
      ],
    }),
  ],
  controllers: [PromoController],
  providers: [PromoService],
})
export class PromoModule {}
