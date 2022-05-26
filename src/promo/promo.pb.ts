/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from '@nestjs/microservices';
import * as Long from 'long';
import * as _m0 from 'protobufjs/minimal';
import { Observable } from 'rxjs';

export const protobufPackage = 'promo';

export interface CreatePromoRequest {
  merchantId: number;
  code: string;
  percentage: number;
  maxCut: number;
  maxUse: number;
}

export interface CreatePromoResponse {
  status: number;
  error: string[];
}

export interface ListPromoRequest {
  merchantId: number;
}

export interface Promo {
  id: number;
  code: string;
  percentage: number;
  maxCut: number;
  maxUse: number;
  totalUse: number;
}

export interface ListPromoResponse {
  data: Promo[];
  status: number;
  error: string[];
}

export interface UsePromoRequest {
  id: number;
}

export interface UsePromoResponse {
  status: number;
  error: string[];
}

export interface DeletePromoRequest {
  id: number;
}

export interface DeletePromoResponse {
  status: number;
  error: string[];
}

export const PROMO_PACKAGE_NAME = 'promo';

export interface PromoServiceClient {
  createPromo(request: CreatePromoRequest): Observable<CreatePromoResponse>;

  listPromo(request: ListPromoRequest): Observable<ListPromoResponse>;

  usePromo(request: UsePromoRequest): Observable<UsePromoResponse>;

  deletePromo(request: DeletePromoRequest): Observable<DeletePromoResponse>;
}

export interface PromoServiceController {
  createPromo(
    request: CreatePromoRequest,
  ):
    | Promise<CreatePromoResponse>
    | Observable<CreatePromoResponse>
    | CreatePromoResponse;

  listPromo(
    request: ListPromoRequest,
  ):
    | Promise<ListPromoResponse>
    | Observable<ListPromoResponse>
    | ListPromoResponse;

  usePromo(
    request: UsePromoRequest,
  ):
    | Promise<UsePromoResponse>
    | Observable<UsePromoResponse>
    | UsePromoResponse;

  deletePromo(
    request: DeletePromoRequest,
  ):
    | Promise<DeletePromoResponse>
    | Observable<DeletePromoResponse>
    | DeletePromoResponse;
}

export function PromoServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = [
      'createPromo',
      'listPromo',
      'usePromo',
      'deletePromo',
    ];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcMethod('PromoService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(
        constructor.prototype,
        method,
      );
      GrpcStreamMethod('PromoService', method)(
        constructor.prototype[method],
        method,
        descriptor,
      );
    }
  };
}

export const PROMO_SERVICE_NAME = 'PromoService';

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
