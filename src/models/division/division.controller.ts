import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { DivisionService } from './division.service';
import { CreateDivisionDTO } from './dto/create-division.dto';
import { UpdateDivisionDTO } from './dto/update-division.dto';
import { UpdatePartialDivisionDTO } from './dto/update-partial-division.dto';
import { ParamIdDecorator } from '../../decorators/param-id.decorator';

@Controller('divisions')
export class DivisionController {
  constructor(private readonly divisionService: DivisionService) {}
  @Post()
  async createDivision(@Body() data: CreateDivisionDTO) {
    return this.divisionService.createDivision(data);
  }
  @Get()
  async listDivisions() {
    return { divisions: [] };
  }
  @Get(':id')
  async getDivisionById(@Param('id', ParseIntPipe) id: number) {
    return { division: { id } };
  }
  @Put(':id')
  async updateDivision(
    @ParamIdDecorator() id,
    @Body() data: UpdateDivisionDTO,
  ) {
    return this.divisionService.updateDivision(id, data);
  }
  @Patch(':id')
  async updatePartialDivision(
    @Body() body: UpdatePartialDivisionDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return { method: 'patch', body, id };
  }
  @Delete(':id')
  async deleteDivision(@Param('id', ParseIntPipe) id: number) {
    return { method: 'delete', id };
  }
}
