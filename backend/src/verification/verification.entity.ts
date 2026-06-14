import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('verifications')
export class Verification {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  identityId: string;

  @Column()
  walletAddress: string;

  @Column()
  proofHash: string;

  @Column()
  verificationCommitment: string;

  @Column({ default: 'pending' })
  status: string; // pending, approved, rejected

  @Column({ nullable: true })
  reason: string;

  @Column({ type: 'json', nullable: true })
  metadata: Record<string, any>;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
