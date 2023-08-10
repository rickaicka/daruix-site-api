import { IsNumber, IsString } from 'class-validator';
import { IClient } from '../interface/client.interface';

export class CreateClientDTO implements IClient {
  @IsString()
  readonly clientName: string;

  @IsNumber()
  readonly divisionId: number;
}
