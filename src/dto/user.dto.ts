import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class EditUserDto {
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  firstname?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  lastname?: string;
}
