import { PartialType } from '@nestjs/mapped-types';
import { CreateIdentityDto } from './create-identity.dto';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateIdentityDto extends PartialType(CreateIdentityDto) {
  @IsBoolean()
  @IsOptional()
  verificationStatus?: boolean;

  @IsBoolean()
  @IsOptional()
  revoked?: boolean;
}
