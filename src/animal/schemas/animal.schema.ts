import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';
import { Owner } from 'src/owner/schemas/owner.schema';
export type OwnerDocument = Animal & Document;

@Schema()
export class Animal {
  @ApiProperty({
    example: 'Bobby',
    description: 'The name of the animal',
  })
  @Prop()
  name: string;

  @ApiProperty({
    example: 'owner id',
    description: 'The id of the owner',
  })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Owner' })
  owner: Owner;
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);
