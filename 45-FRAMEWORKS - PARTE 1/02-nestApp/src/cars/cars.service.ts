import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CarCollectioName, CarDocument } from './dto/car.schema';
import { CreateCarDTO } from './dto/register-car.dto';

@Injectable()
export class CarsService {
    constructor(@InjectModel(CarCollectioName) private CarModel: Model<CarDocument>){}

    async getAllCars(){
        return this.CarModel.find()
    }
    async createCar(car: CreateCarDTO){
        return this.CarModel.create(car);
    }
    async updateCar(id: string, car: CreateCarDTO){
        return this.CarModel.findByIdAndUpdate(id, car, {new: true});
    }
    async deleteCar(id: string){
        await this.CarModel.findByIdAndDelete(id);
    }
}
