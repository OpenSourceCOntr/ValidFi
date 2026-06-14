import { PartialType } from '@nestjs/mapped-types';
import { CreateVerificationDto } from './create-verification.dto';
import { IsString, IsOptional } from 'class-validator';

export class UpdateVerificationDto extends PartialType(CreateVerificationDto) {
  @IsString()
  @IsOptional()
  status?: string;

  @IsString()
  @IsOptional()
  reason?: string;
}
