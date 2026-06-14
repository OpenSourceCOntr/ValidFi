import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('access_permissions')
export class AccessPermission {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  grantorAddress: string;

  @Column()
  granteeAddress: string;

  @Column()
  resourceId: string;

  @Column()
  accessExpiry: number;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'json', nullable: true })
  metadata: Record<string, any>;

  @CreateDateColumn()
  grantedAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
