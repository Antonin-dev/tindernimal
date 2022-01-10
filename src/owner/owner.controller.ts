import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OwnerService } from './owner.service';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';

import {
  ApiCreatedResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Owner } from './schemas/owner.schema';

@Controller('owner')
@ApiTags('Owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Post()
  @ApiOperation({ summary: 'Create owner' })
  @ApiCreatedResponse({
    description: 'owner created',
    type: Owner,
  })
  @ApiResponse({
    status: 401,
    description: 'access denied',
  })
  create(@Body() createOwnerDto: CreateOwnerDto) {
    return this.ownerService.create(createOwnerDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Owner,
  })
  findAll() {
    return this.ownerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ownerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateOwnerDto: UpdateOwnerDto) {
    return this.ownerService.update(+id, updateOwnerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ownerService.remove(+id);
  }
}
