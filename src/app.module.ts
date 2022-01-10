import { Module } from '@nestjs/common';
import { OwnerModule } from './owner/owner.module';
import { AnimalModule } from './animal/animal.module';

@Module({
  imports: [AnimalModule, OwnerModule],
})
export class AppModule {}
