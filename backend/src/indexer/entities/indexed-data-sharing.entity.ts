import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Index } from 'typeorm';

@Entity('indexed_data_sharing')
export class IndexedDataSharing {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'bigint', name: 'sharing_id' })
  @Index()
  sharingId: string;

  @Column({ type: 'bigint', name: 'identity_id' })
  @Index()
  identityId: string;

  @Column({ type: 'varchar', length: 255 })
  @Index()
  owner: string;

  @Column({ type: 'varchar', length: 255 })
  @Index()
  recipient: string;

  @Column({ type: 'text', name: 'encrypted_data' })
  encryptedData: string;

  @Column({ type: 'text', name: 'encryption_key_hash' })
  encryptionKeyHash: string;

  @Column({ type: 'boolean', name: 'access_revoked', default: false })
  accessRevoked: boolean;

  @Column({ type: 'bigint', name: 'shared_at' })
  sharedAt: number;

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
