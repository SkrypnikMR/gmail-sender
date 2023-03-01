import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateMailDto {
  @IsEmail()
  @IsNotEmpty()
  @ApiProperty()
  to: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  subject: string;

  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.toString())
  @ApiProperty()
  text: string;
}
