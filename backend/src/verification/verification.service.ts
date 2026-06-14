import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Verification } from './verification.entity';
import { CreateVerificationDto } from './dto/create-verification.dto';
import { UpdateVerificationDto } from './dto/update-verification.dto';

@Injectable()
export class VerificationService {
  constructor(
    @InjectRepository(Verification)
    private readonly verificationRepository: Repository<Verification>,
  ) {}

  async create(createVerificationDto: CreateVerificationDto): Promise<Verification> {
    const verification = this.verificationRepository.create(createVerificationDto);
    return await this.verificationRepository.save(verification);
  }

  async findAll(): Promise<Verification[]> {
    return await this.verificationRepository.find({ order: { createdAt: 'DESC' } });
  }

  async findOne(id: string): Promise<Verification> {
    const verification = await this.verificationRepository.findOne({ where: { id } });
    if (!verification) {
      throw new NotFoundException('Verification not found');
    }
    return verification;
  }

  async update(id: string, updateVerificationDto: UpdateVerificationDto): Promise<Verification> {
    const verification = await this.findOne(id);
    Object.assign(verification, updateVerificationDto);
    return await this.verificationRepository.save(verification);
  }

  async approve(id: string): Promise<Verification> {
    const verification = await this.findOne(id);
    verification.status = 'approved';
    return await this.verificationRepository.save(verification);
  }

  async reject(id: string, reason: string): Promise<Verification> {
    const verification = await this.findOne(id);
    verification.status = 'rejected';
    verification.reason = reason;
    return await this.verificationRepository.save(verification);
  }

  async findByIdentityId(identityId: string): Promise<Verification[]> {
    return await this.verificationRepository.find({
      where: { identityId },
      order: { createdAt: 'DESC' },
    });
  }
}
