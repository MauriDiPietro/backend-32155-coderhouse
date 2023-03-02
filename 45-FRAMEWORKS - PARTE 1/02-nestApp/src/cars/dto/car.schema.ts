import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CarDocument = Car & Document;

@Schema()
export class Car{
    @Prop({ type: String, required: true })
    brand: string;

    @Prop({ type: String, required: true })
    model: string;

    @Prop({ type: Number, required: true })
    year: number;
}

export const CarCollectioName = Car.name;
export const CarsSchema = SchemaFactory.createForClass(Car);