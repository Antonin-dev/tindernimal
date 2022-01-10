import { ApiProperty } from '@nestjs/swagger';

export class Owner {
  /**
   * The name of the Owner
   * @example Bobby
   */

  @ApiProperty({ example: 'Bobby', description: 'The first name of the owner' })
  firstName: string;

  @ApiProperty({ example: 'dupont', description: 'The last name of the owner' })
  lastName: string;

  @ApiProperty({
    example: '09/02/1989',
    description: 'The birth date of the owner',
  })
  birthDate: string;

  @ApiProperty({
    example: '06.06.06.06.06',
    description: 'The phone number of the owner',
  })
  phoneNumber: string;

  @ApiProperty({ example: '[12, 32]', description: 'The id list of the owner' })
  animalList: string[];
}
