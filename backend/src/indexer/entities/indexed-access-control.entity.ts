import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Index } from 'typeorm';

@Entity('indexed_access_controls')
export class IndexedAccessControl {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'bigint', name: 'access_id' })
  @Index()
  accessId: string;

  @Column({ type: 'bigint', name: 'identity_id' })
  @Index()
  identityId: string;

  @Column({ type: 'varchar', length: 255 })
  @Index()
  grantor: string;

  @Column({ type: 'varchar', length: 255 })
  @Index()
  grantee: string;

  @Column({ type: 'boolean', name: 'access_granted' })
  accessGranted: boolean;

  @Column({ type: 'bigint', name: 'expires_at', nullable: true })
  expiresAt: number;

  @Column({ type: 'bigint', name: 'granted_at' })
  grantedAt: number;

  @Column({ type: 'bigint', name: 'ledger_timestamp' })
  ledgerTimestamp: number;

  @Column({ type: 'bigint', name: 'ledger_sequence' })
  @Index()
  ledgerSequence: number;

  @Column({ type: 'varchar', length: 255, name: 'transaction_hash' })
  @Index()
  transactionHash: string;

  @Column({ type: 'varchar', length: 255, name: 'contract_id' })
  contractId: string;

  @CreateDateColumn({ name: 'indexed_at' })
  indexedAt: Date;

  @Column({ type: 'json', nullable: true })
  metadata: Record<string, any>;
}
