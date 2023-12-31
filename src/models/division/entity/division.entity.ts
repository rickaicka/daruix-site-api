import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IDivision } from '../interface/division.interface';
import { ClientEntity } from '../../client/entity/client.entity';

@Entity({
  name: 'divisions',
})
export class DivisionEntity implements IDivision {
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id?: number;

  @Column({
    length: 127,
    unique: true,
  })
  divisionName: string;

  @OneToMany(() => ClientEntity, (client) => client)
  clients: ClientEntity[];

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updateAt?: Date;
}
