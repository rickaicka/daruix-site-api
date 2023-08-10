import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IClient } from '../interface/client.interface';
import { DivisionEntity } from '../../division/entity/division.entity';

@Entity({
  name: 'clients',
})
export class ClientEntity implements IClient {
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id?: number;

  @Column({
    length: 127,
    unique: true,
  })
  clientName: string;

  @ManyToOne(() => DivisionEntity, (division) => division.clients)
  division: DivisionEntity;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updateAt?: Date;
}
