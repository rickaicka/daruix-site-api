import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientEntity } from './entity/client.entity';
import { Repository } from 'typeorm';
import { CreateClientDTO } from './dto/create-client.dto';
import { DivisionEntity } from '../division/entity/division.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntity)
    private clientsRepository: Repository<ClientEntity>,
    @InjectRepository(DivisionEntity)
    private divisionRepository: Repository<DivisionEntity>,
  ) {}

  async createClient(data: CreateClientDTO) {
    const division = await this.divisionRepository.findOne({
      where: { id: data.divisionId },
    });
    if (division) {
      const client = new ClientEntity();
      client.clientName = 'Ricoy';
      client.division = division;
      this.clientsRepository.create(client);
      return this.clientsRepository.save(client);
    } else {
      throw new NotFoundException(`A Divisão ${division} não existe`);
    }
  }
}
