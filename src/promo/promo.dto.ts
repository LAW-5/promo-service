import { IsNumber, IsString } from 'class-validator';
import {
  CreatePromoRequest,
  DeletePromoRequest,
  ListPromoRequest,
  UsePromoRequest,
} from './promo.pb';

export class CreatePromoDto implements CreatePromoRequest {
  @IsNumber()
  public readonly merchantId: number;

  @IsString()
  public readonly code: string;

  @IsNumber()
  public readonly percentage: number;

  @IsNumber()
  public readonly maxCut: number;

  @IsNumber()
  public readonly maxUse: number;
}

export class ListPromoDto implements ListPromoRequest {
  @IsNumber()
  public readonly merchantId: number;
}

export class UsePromoDto implements UsePromoRequest {
  @IsNumber()
  public readonly id: number;
}

export class DeletePromoDto implements DeletePromoRequest {
  @IsNumber()
  public readonly id: number;
}
