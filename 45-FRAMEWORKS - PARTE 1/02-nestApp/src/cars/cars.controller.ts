import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CarDocument } from './dto/car.schema';
import { CreateCarDTO } from './dto/register-car.dto';

@Controller('cars')
export class CarsController {
    constructor(private readonly carsService: CarsService) {}

    @Get('/')
    getAllCars(): Promise<CarDocument[]>{
        return this.carsService.getAllCars();
    }

    @Post('/')
    registerCar(@Body() car: CreateCarDTO): Promise<CarDocument>{
        return this.carsService.createCar(car)
    }

    @Put('/:id')
        updateCar(@Param('id') carId:string, @Body() car: CreateCarDTO): Promise<CarDocument>{
            return this.carsService.updateCar(carId, car)
        }

        @Delete('/:id')
        deleteCar(@Param('id') carId:string): Promise<void>{
            return this.carsService.deleteCar(carId)
        }
}
