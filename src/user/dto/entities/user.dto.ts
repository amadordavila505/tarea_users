import { IsNotEmpty, IsNumber, IsString, MaxLength, isBoolean } from "class-validator";

export class  User {
    @IsNotEmpty()
    @IsNumber()
    id:number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name:string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    password:string;
    
    @IsString()
    @IsNotEmpty()
    @MaxLength(400)
    email:string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(300)
    sexo:string;
    
    @IsString()
    @IsNotEmpty()
    active:boolean; }