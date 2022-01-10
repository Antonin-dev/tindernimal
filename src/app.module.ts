import { Module } from '@nestjs/common';
import { OwnerModule } from './owner/owner.module';
import { AnimalModule } from './animal/animal.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AnimalModule,
    OwnerModule,
    MongooseModule.forRoot(
      'mongodb://root:changeit@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false',
    ),
  ],
})
export class AppModule {}
