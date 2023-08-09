import { Get, Injectable } from '@nestjs/common';

@Injectable()
export class DivisionService {
  @Get()
  getDivisions() {}
}
