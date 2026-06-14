import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessControlService } from './access-control.service';
import { AccessControlController } from './access-control.controller';
import { AccessPermission } from './access-control.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccessPermission])],
  controllers: [AccessControlController],
  providers: [AccessControlService],
  exports: [AccessControlService],
})
export class AccessControlModule {}
