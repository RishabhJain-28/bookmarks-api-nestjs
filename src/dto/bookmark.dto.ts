import {
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateBookmarkDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  link: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;
}

export class EditBookmarkDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  link?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string;
}
