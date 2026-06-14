import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Index } from 'typeorm';

@Entity('indexed_verifications')
export class IndexedVerification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'bigint', name: 'verification_id' })
  @Index()
  verificationId: string;

  @Column({ type: 'bigint', name: 'identity_id' })
  @Index()
  identityId: string;

  @Column({ type: 'varchar', length: 255 })
  @Index()
  verifier: string;

  @Column({ type: 'varchar', length: 255 })
  @Index()
  subject: string;

  @Column({ type: 'boolean' })
  verified: boolean;

  @Column({ type: 'text', nullable: true })
  proofHash: string;

  @Column({ type: 'text', nullable: true })
  zkProof: string;

  @Column({ type: 'bigint', name: 'verified_at' })
  verifiedAt: number;

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
