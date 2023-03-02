import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import * as dotenv from 'dotenv'
dotenv.config()

@Module({
  imports: [CarsModule, MongooseModule.forRoot(process.env.MONGO_URL, {retryAttempts: 2})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
