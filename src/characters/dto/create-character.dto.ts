import { IsNotEmpty, IsString, IsNumber, IsArray, IsNotEmptyObject, IsOptional } from 'class-validator';
import { Merits, Attributes, Skills } from '../entities/character.entity';

export class CreateCharacterDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    playerName: string;

    @IsOptional()
    @IsString()
    imageUrl: string;

    @IsNotEmpty()
    @IsNumber()
    age: number;

    @IsNotEmpty()
    @IsString()
    virtue: string;

    @IsNotEmpty()
    @IsString()
    vice: string;

    @IsNotEmpty()
    @IsString()
    concept: string;

    @IsNotEmpty()
    @IsNumber()
    maxHealth: number;

    @IsNotEmpty()
    @IsNumber()
    maxWillpower: number;

    @IsNotEmpty()
    @IsNumber()
    maxIntegrity: number;
    
    @IsNotEmpty()
    @IsArray()
    merits: Merits;

    @IsNotEmpty()
    @IsNumber()
    size: number;

    @IsNotEmpty()
    @IsNumber()
    speed: number;

    @IsNotEmpty()
    @IsNumber()
    defense: number;

    @IsOptional()
    @IsNumber()
    armor?: number;

    @IsNotEmpty()
    @IsNumber()
    initiative: number;

    @IsNotEmpty()
    @IsNotEmptyObject()
    attributes: Attributes;

    @IsNotEmpty()
    @IsNotEmptyObject()
    skills: Skills;
}
