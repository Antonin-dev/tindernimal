import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export type OwnerDocument = Owner & Document;

import { ApiProperty } from '@nestjs/swagger';
import { Animal } from 'src/animal/schemas/animal.schema';
@Schema()
export class Owner {
  /**
   * The name of the Owner
   * @example Bobby
   */

  @ApiProperty({ example: 'Bobby', description: 'The first name of the owner' })
  @Prop()
  firstName: string;

  @ApiProperty({ example: 'dupont', description: 'The last name of the owner' })
  @Prop()
  lastName: string;

  @ApiProperty({
    example: '09/02/1989',
    description: 'The birth date of the owner',
  })
  @Prop()
  birthDate: string;

  @ApiProperty({
    example: '06.06.06.06.06',
    description: 'The phone number of the owner',
  })
  @Prop()
  phoneNumber: string;

  @ApiProperty({ example: '[12, 32]', description: 'The id list of the owner' })
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Animal' }] })
  animalList: Animal[];
}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
