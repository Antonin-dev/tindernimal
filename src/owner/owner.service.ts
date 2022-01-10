import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnerService {
  private readonly owners: Owner[] = [];

  create(owner: CreateOwnerDto): Owner {
    this.owners.push(owner);
    return owner;
  }

  findAll() {
    return this.owners;
  }

  findOne(id: number) {
    return this.owners[id];
  }

  update(id: number, updateOwnerDto: UpdateOwnerDto) {
    // this.owners[id] = updateOwnerDto;
    return updateOwnerDto;
  }

  remove(id: number) {
    return this.owners[id];
  }
}
