import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class CreateAccessPermissionDto {
  @IsString()
  @IsNotEmpty()
  grantorAddress: string;

  @IsString()
  @IsNotEmpty()
  granteeAddress: string;

  @IsString()
  @IsNotEmpty()
  resourceId: string;

  @IsNumber()
  @IsNotEmpty()
  durationSeconds: number;

  @IsOptional()
  metadata?: Record<string, any>;
}
