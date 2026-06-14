import { Controller, Get, Post, Body, Patch, Param, UseGuards, Request } from '@nestjs/common';
import { AccessControlService } from './access-control.service';
import { CreateAccessPermissionDto } from './dto/create-access-permission.dto';
import { UpdateAccessPermissionDto } from './dto/update-access-permission.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('access-control')
@UseGuards(JwtAuthGuard)
export class AccessControlController {
  constructor(private readonly accessControlService: AccessControlService) {}

  @Post()
  create(@Body() createAccessPermissionDto: CreateAccessPermissionDto, @Request() req) {
    return this.accessControlService.create({
      ...createAccessPermissionDto,
      grantorAddress: req.user.walletAddress,
    });
  }

  @Get()
  findAll() {
    return this.accessControlService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accessControlService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccessPermissionDto: UpdateAccessPermissionDto) {
    return this.accessControlService.update(id, updateAccessPermissionDto);
  }

  @Patch(':id/revoke')
  revoke(@Param('id') id: string) {
    return this.accessControlService.revoke(id);
  }

  @Get('check/:resourceId')
  checkAccess(@Param('resourceId') resourceId: string, @Request() req) {
    return this.accessControlService.checkAccess(req.user.walletAddress, resourceId);
  }

  @Get('grantee/:granteeAddress')
  findByGrantee(@Param('granteeAddress') granteeAddress: string) {
    return this.accessControlService.findByGrantee(granteeAddress);
  }

  @Get('grantor/:grantorAddress')
  findByGrantor(@Param('grantorAddress') grantorAddress: string) {
    return this.accessControlService.findByGrantor(grantorAddress);
  }
}
