import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IDivision } from '../interface/division.interface';

@Entity()
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

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updateAt?: Date;
}
