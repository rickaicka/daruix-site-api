import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DivisionEntity } from './entity/division.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateDivisionDTO } from './dto/create-division.dto';
import { UpdateDivisionDTO } from './dto/update-division.dto';

@Injectable()
export class DivisionService {
  constructor(
    @InjectRepository(DivisionEntity)
    private divisionsRepository: Repository<DivisionEntity>,
  ) {}

  async createDivision(data: CreateDivisionDTO) {
    const division = this.divisionsRepository.create(data);
    return this.divisionsRepository.save(division);
  }

  async updateDivision(id: number, { divisionName }: UpdateDivisionDTO) {
    await this.existsId(id);
    await this.divisionsRepository.update(id, { divisionName });
    return this.divisionsRepository.findOneBy({ id });
  }

  async existsId(id: number) {
    if (!(await this.divisionsRepository.exist({ where: { id } }))) {
      throw new NotFoundException(`A Divisão com ID: ${id} não existe`);
    }
  }
}
