import { IsString, IsNotEmpty, IsOptional, IsBoolean } from 'class-validator';

export class CreateIdentityDto {
  @IsString()
  @IsNotEmpty()
  walletAddress: string;

  @IsString()
  @IsNotEmpty()
  documentHash: string;

  @IsString()
  @IsNotEmpty()
  ipfsCid: string;

  @IsBoolean()
  @IsOptional()
  verificationStatus?: boolean;

  @IsOptional()
  metadata?: Record<string, any>;
}
