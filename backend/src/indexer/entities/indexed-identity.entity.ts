import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Index } from 'typeorm';

@Entity('indexed_identities')
export class IndexedIdentity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'bigint', name: 'identity_id' })
  @Index()
  identityId: string;

  @Column({ type: 'varchar', length: 255 })
  @Index()
  owner: string;

  @Column({ type: 'varchar', length: 255 })
  @Index()
  documentHash: string;

  @Column({ type: 'text' })
  ipfsCid: string;

  @Column({ type: 'boolean', default: false })
  verificationStatus: boolean;

  @Column({ type: 'boolean', default: false })
  revoked: boolean;

  @Column({ type: 'bigint', name: 'created_at' })
  createdAt: number;

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
