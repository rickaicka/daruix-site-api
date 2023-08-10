import { CreateDivisionDTO } from './create-division.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePartialDivisionDTO extends PartialType(CreateDivisionDTO) {}
