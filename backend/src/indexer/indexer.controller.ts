import { Controller, Get, Query, Param } from '@nestjs/common';
import { IndexerService } from './indexer.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('indexer')
@Controller('indexer')
export class IndexerController {
  constructor(private readonly indexerService: IndexerService) {}

  @Get('status')
  @ApiOperation({ summary: 'Get indexer status' })
  @ApiResponse({ status: 200, description: 'Returns indexer status' })
  async getStatus() {
    return this.indexerService.getIndexerStatus();
  }

  @Get('identities/:owner')
  @ApiOperation({ summary: 'Get identities by owner address' })
  @ApiResponse({ status: 200, description: 'Returns identities for the owner' })
  async getIdentitiesByOwner(@Param('owner') owner: string) {
    return this.indexerService.getIdentitiesByOwner(owner);
  }

  @Get('verifications/:subject')
  @ApiOperation({ summary: 'Get verifications by subject address' })
  @ApiResponse({ status: 200, description: 'Returns verifications for the subject' })
  async getVerificationsBySubject(@Param('subject') subject: string) {
    return this.indexerService.getVerificationsBySubject(subject);
  }

  @Get('access-controls/:grantee')
  @ApiOperation({ summary: 'Get access controls by grantee address' })
  @ApiResponse({ status: 200, description: 'Returns access controls for the grantee' })
  async getAccessControlsByGrantee(@Param('grantee') grantee: string) {
    return this.indexerService.getAccessControlsByGrantee(grantee);
  }

  @Get('data-sharing/:recipient')
  @ApiOperation({ summary: 'Get data sharing by recipient address' })
  @ApiResponse({ status: 200, description: 'Returns data sharing for the recipient' })
  async getDataSharingByRecipient(@Param('recipient') recipient: string) {
    return this.indexerService.getDataSharingByRecipient(recipient);
  }
}
