import { ApiProperty } from '@nestjs/swagger';

export class Animal {
  /**
   * The name of the Owner
   * @example Youyou
   */

  @ApiProperty({ example: 'Youyou', description: 'The name of the animal' })
  name: string;

  @ApiProperty({
    example: 'caniche',
    description: 'The last name of the animal',
  })
  breed: string[];

  @ApiProperty({
    example: 7,
    description: 'The age of the animal',
  })
  age: number;

  @ApiProperty({
    example: true,
    description: 'dog is loof',
  })
  loof: boolean;

  @ApiProperty({ example: 'male', description: 'The gender of the animal' })
  gender: string;

  @ApiProperty({
    example: 'it is beautiful',
    description: 'The description of the animal',
  })
  description: string;

  @ApiProperty({
    example: ['12', '334'],
    description: 'The like array of the animal',
  })
  like: string[];
}
