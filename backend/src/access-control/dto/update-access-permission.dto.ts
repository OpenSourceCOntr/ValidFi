import { PartialType } from '@nestjs/mapped-types';
import { CreateAccessPermissionDto } from './create-access-permission.dto';
import { IsBoolean, IsOptional, IsNumber } from 'class-validator';

export class UpdateAccessPermissionDto extends PartialType(CreateAccessPermissionDto) {
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsNumber()
  @IsOptional()
  accessExpiry?: number;
}
