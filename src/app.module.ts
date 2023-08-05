import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as process from 'process';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { DivisionEntity } from './division/entity/division.entity';

export const EntitiesList = [DivisionEntity];

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: EntitiesList,
      synchronize: process.env.ENV === 'development',
      schema: 'public',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
