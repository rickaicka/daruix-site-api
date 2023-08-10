import { Module } from '@nestjs/common';
import { DivisionController } from './division.controller';
import { DivisionService } from './division.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DivisionEntity } from './entity/division.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DivisionEntity])],
  controllers: [DivisionController],
  providers: [DivisionService],
  exports: [DivisionService],
})
export class DivisionModule {}
