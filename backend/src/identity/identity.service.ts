import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Identity } from './identity.entity';
import { CreateIdentityDto } from './dto/create-identity.dto';
import { UpdateIdentityDto } from './dto/update-identity.dto';

@Injectable()
export class IdentityService {
  constructor(
    @InjectRepository(Identity)
    private readonly identityRepository: Repository<Identity>,
  ) {}

  async create(createIdentityDto: CreateIdentityDto): Promise<Identity> {
    const identity = this.identityRepository.create(createIdentityDto);
    return await this.identityRepository.save(identity);
  }

  async findAll(walletAddress?: string): Promise<Identity[]> {
    if (walletAddress) {
      return await this.identityRepository.find({
        where: { walletAddress },
        order: { createdAt: 'DESC' },
      });
    }
    return await this.identityRepository.find({ order: { createdAt: 'DESC' } });
  }

  async findOne(id: string): Promise<Identity> {
    const identity = await this.identityRepository.findOne({ where: { id } });
    if (!identity) {
      throw new NotFoundException('Identity not found');
    }
    return identity;
  }

  async update(id: string, updateIdentityDto: UpdateIdentityDto): Promise<Identity> {
    const identity = await this.findOne(id);
    Object.assign(identity, updateIdentityDto);
    return await this.identityRepository.save(identity);
  }

  async revoke(id: string): Promise<Identity> {
    const identity = await this.findOne(id);
    identity.revoked = true;
    return await this.identityRepository.save(identity);
  }

  async remove(id: string): Promise<void> {
    const identity = await this.findOne(id);
    await this.identityRepository.remove(identity);
  }

  async findByDocumentHash(documentHash: string): Promise<Identity> {
    return await this.identityRepository.findOne({ where: { documentHash } });
  }
}
