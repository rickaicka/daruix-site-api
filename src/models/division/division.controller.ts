import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { DivisionService } from './division.service';

@Controller('divisions')
export class DivisionController {
  constructor(private readonly divisionService: DivisionService) {}
  @Post()
  async createDivision(@Body() body) {
    return { body };
  }
  @Get()
  async listDivisions() {
    return { divisions: [] };
  }
  @Get(':id')
  async getDivisionById(@Param() params) {
    return { division: { params } };
  }
  @Put(':id')
  async updateDivision(@Body() body, @Param() params) {
    return { method: 'put', body, params };
  }
  @Patch(':id')
  async updatePartialDivision(@Body() body, @Param() params) {
    return { method: 'patch', body, params };
  }
  @Delete(':id')
  async deleteDivision(@Param() params) {
    return { method: 'delete', params };
  }
}
