import { IsNotEmpty, IsNumber, IsString, Length, Min } from 'class-validator';

export class CarDTO{
    @IsNotEmpty()
    @IsString()
    _id: string;

    @IsNotEmpty()
    @IsString()
    @Length(3, 20)
    brand: string;

    @IsNotEmpty()
    model: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    year: number;
}