import { Controller, Inject } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  CreatePromoDto,
  DeletePromoDto,
  ListPromoDto,
  UsePromoDto,
} from './promo.dto';
import {
  CreatePromoResponse,
  DeletePromoResponse,
  ListPromoResponse,
  PROMO_SERVICE_NAME,
  UsePromoResponse,
} from './promo.pb';
import { PromoService } from './promo.service';

@Controller('promo')
export class PromoController {
  @Inject(PromoService)
  private readonly service: PromoService;

  @GrpcMethod(PROMO_SERVICE_NAME, 'CreatePromo')
  private createPromo(payload: CreatePromoDto): Promise<CreatePromoResponse> {
    return this.service.createPromo(payload);
  }

  @GrpcMethod(PROMO_SERVICE_NAME, 'UsePromo')
  private usePromo(payload: UsePromoDto): Promise<UsePromoResponse> {
    return this.service.usePromo(payload);
  }

  @GrpcMethod(PROMO_SERVICE_NAME, 'ListPromo')
  private listPromo(payload: ListPromoDto): Promise<ListPromoResponse> {
    return this.service.listPromo(payload);
  }

  @GrpcMethod(PROMO_SERVICE_NAME, 'DeletePromo')
  private deletePromo(payload: DeletePromoDto): Promise<DeletePromoResponse> {
    return this.service.deletePromo(payload);
  }
}
