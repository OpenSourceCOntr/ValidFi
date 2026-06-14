import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('shared_data')
export class SharedData {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  ownerAddress: string;

  @Column()
  recipientAddress: string;

  @Column()
  documentHash: string;

  @Column('text')
  encryptedKey: string;

  @Column()
  accessExpiry: number;

  @Column({ default: true })
  isActive: boolean;

  @Column({ type: 'json', nullable: true })
  metadata: Record<string, any>;

  @CreateDateColumn()
  sharedAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
