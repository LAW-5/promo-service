import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreatePromoDto,
  DeletePromoDto,
  ListPromoDto,
  UsePromoDto,
} from './promo.dto';
import { Promo } from './promo.entitiy';
import {
  CreatePromoResponse,
  DeletePromoResponse,
  ListPromoResponse,
  UsePromoResponse,
} from './promo.pb';

@Injectable()
export class PromoService {
  @InjectRepository(Promo)
  private readonly repository: Repository<Promo>;

  public async createPromo({
    merchantId,
    code,
    percentage,
    maxCut,
    maxUse,
  }: CreatePromoDto): Promise<CreatePromoResponse> {
    let promo = new Promo();
    promo.merchantId = merchantId;
    promo.code = code;
    promo.percentage = percentage;
    promo.maxCut = maxCut;
    promo.maxUse = maxUse;

    await this.repository.save(promo);

    return { status: HttpStatus.OK, error: null };
  }

  public async listPromo({
    merchantId,
  }: ListPromoDto): Promise<ListPromoResponse> {
    const promos: Promo[] = await this.repository.find({
      where: { merchantId: merchantId },
    });

    let response: ListPromoResponse = {
      data: [],
      status: HttpStatus.OK,
      error: null,
    };

    promos.forEach((x: Promo) =>
      response.data.push({
        id: x.id,
        code: x.code,
        percentage: x.percentage,
        maxCut: x.maxCut,
        maxUse: x.maxUse,
        totalUse: x.totalUse,
      }),
    );

    return response;
  }

  public async usePromo({ id }: UsePromoDto): Promise<UsePromoResponse> {
    let promo: Promo = await this.repository.findOne({ where: { id: id } });

    if (!promo) {
      return {
        status: HttpStatus.NOT_FOUND,
        error: ['No promo with given id'],
      };
    }

    if (promo.totalUse >= promo.maxUse) {
      return {
        status: HttpStatus.BAD_REQUEST,
        error: ['Promo have reach max usage'],
      };
    }

    promo.totalUse += 1;
    await this.repository.save(promo);

    return { status: HttpStatus.OK, error: null };
  }

  public async deletePromo({
    id,
  }: DeletePromoDto): Promise<DeletePromoResponse> {
    let promo: Promo = await this.repository.findOne({ where: { id: id } });

    if (!promo) {
      return {
        status: HttpStatus.NOT_FOUND,
        error: ['No promo with given id'],
      };
    }

    await this.repository.delete(promo);

    return { status: HttpStatus.OK, error: null };
  }
}
