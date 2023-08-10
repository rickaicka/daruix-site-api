import { Module } from '@nestjs/common';
import { ClientService } from './client.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientEntity } from './entity/client.entity';
import { ClientController } from './client.controller';
import { DivisionEntity } from '../division/entity/division.entity';

@Module({
  providers: [ClientService],
  imports: [TypeOrmModule.forFeature([ClientEntity, DivisionEntity])],
  controllers: [ClientController],
  exports: [ClientService],
})
export class ClientModule {}
