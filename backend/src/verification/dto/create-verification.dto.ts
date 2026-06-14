import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateVerificationDto {
  @IsString()
  @IsNotEmpty()
  identityId: string;

  @IsString()
  @IsNotEmpty()
  walletAddress: string;

  @IsString()
  @IsNotEmpty()
  proofHash: string;

  @IsString()
  @IsNotEmpty()
  verificationCommitment: string;

  @IsOptional()
  metadata?: Record<string, any>;
}
