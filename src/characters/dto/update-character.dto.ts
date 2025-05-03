import { IsNumber, IsString, IsArray, IsNotEmptyObject, IsOptional } from 'class-validator';
import { Merits, Attributes, Skills, HealthPoints } from '../entities/character.entity';

export class UpdateCharacterDto {
    @IsOptional()
    @IsString()
    imageUrl: string;

    @IsOptional()
    @IsArray()
    health?: HealthPoints

    @IsOptional()
    @IsNumber()
    willpower?: number

    @IsOptional()
    @IsNumber()
    integrity?: number;

    @IsOptional()
    @IsArray()
    merits?: Merits;

    @IsOptional()
    @IsNumber()
    initiative?: number;

    @IsOptional()
    @IsNumber()
    beats?: number;

    @IsOptional()
    @IsNumber()
    experience?: number;

    @IsOptional()
    @IsNotEmptyObject()
    attributes?: Attributes;

    @IsOptional()
    @IsNotEmptyObject()
    skills?: Skills;

    [key: string]: any;
}
