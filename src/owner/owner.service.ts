import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner, OwnerDocument } from './schemas/owner.schema';

@Injectable()
export class OwnerService {
  constructor(
    @InjectModel(Owner.name) private ownerModel: Model<OwnerDocument>,
  ) {}

  async create(owner: CreateOwnerDto): Promise<Owner> {
    console.log('owner from dto', owner);
    const createdOwner = new this.ownerModel(owner);
    console.log(createdOwner);
    return createdOwner.save();
  }

  async findAll(): Promise<Owner[]> {
    return this.ownerModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} owner`;
  }

  update(id: number, updateOwnerDto: UpdateOwnerDto) {
    return `This action updates a #${id} owner`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
