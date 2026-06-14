import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AccessPermission } from './access-control.entity';
import { CreateAccessPermissionDto } from './dto/create-access-permission.dto';
import { UpdateAccessPermissionDto } from './dto/update-access-permission.dto';

@Injectable()
export class AccessControlService {
  constructor(
    @InjectRepository(AccessPermission)
    private readonly accessPermissionRepository: Repository<AccessPermission>,
  ) {}

  async create(createAccessPermissionDto: CreateAccessPermissionDto): Promise<AccessPermission> {
    const permission = this.accessPermissionRepository.create(createAccessPermissionDto);
    return await this.accessPermissionRepository.save(permission);
  }

  async findAll(): Promise<AccessPermission[]> {
    return await this.accessPermissionRepository.find({ order: { grantedAt: 'DESC' } });
  }

  async findOne(id: string): Promise<AccessPermission> {
    const permission = await this.accessPermissionRepository.findOne({ where: { id } });
    if (!permission) {
      throw new NotFoundException('Access permission not found');
    }
    return permission;
  }

  async update(id: string, updateAccessPermissionDto: UpdateAccessPermissionDto): Promise<AccessPermission> {
    const permission = await this.findOne(id);
    Object.assign(permission, updateAccessPermissionDto);
    return await this.accessPermissionRepository.save(permission);
  }

  async revoke(id: string): Promise<AccessPermission> {
    const permission = await this.findOne(id);
    permission.isActive = false;
    return await this.accessPermissionRepository.save(permission);
  }

  async checkAccess(granteeAddress: string, resourceId: string): Promise<boolean> {
    const permission = await this.accessPermissionRepository.findOne({
      where: { granteeAddress, resourceId, isActive: true },
    });
    
    if (!permission) {
      return false;
    }
    
    const now = Math.floor(Date.now() / 1000);
    return permission.accessExpiry > now;
  }

  async findByGrantee(granteeAddress: string): Promise<AccessPermission[]> {
    return await this.accessPermissionRepository.find({
      where: { granteeAddress },
      order: { grantedAt: 'DESC' },
    });
  }

  async findByGrantor(grantorAddress: string): Promise<AccessPermission[]> {
    return await this.accessPermissionRepository.find({
      where: { grantorAddress },
      order: { grantedAt: 'DESC' },
    });
  }
}
