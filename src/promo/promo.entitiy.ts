import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Promo extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'int' })
  public merchantId: number;

  @Column({ type: 'varchar' })
  public code: string;

  @Column({ type: 'int' })
  public percentage: number;

  @Column({ type: 'int' })
  public maxCut: number;

  @Column({ type: 'int' })
  public maxUse: number;

  @Column({ type: 'int', default: 0 })
  public totalUse: number;
}
