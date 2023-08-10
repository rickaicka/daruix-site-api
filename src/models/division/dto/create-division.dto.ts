import { IsString } from 'class-validator';
import { IDivision } from '../interface/division.interface';

export class CreateDivisionDTO implements IDivision {
  @IsString()
  readonly divisionName: string;
}
