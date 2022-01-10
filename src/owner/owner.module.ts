import { Module } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { OwnerController } from './owner.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Owner } from './schemas/owner.schema';
import { AnimalSchema } from 'src/animal/schemas/animal.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Owner.name, schema: AnimalSchema }]),
  ],
  controllers: [OwnerController],
  providers: [OwnerService],
})
export class OwnerModule {}
