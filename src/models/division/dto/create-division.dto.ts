import { IsString } from 'class-validator';

export class CreateDivisionDTO {
  @IsString()
  readonly divisionName: string;
}
