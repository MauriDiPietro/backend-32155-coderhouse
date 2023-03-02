import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { CarCollectioName, CarsSchema } from './dto/car.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: CarCollectioName, schema: CarsSchema }])],
  controllers: [CarsController],
  providers: [CarsService]
})
export class CarsModule {}
