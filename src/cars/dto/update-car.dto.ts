import { IsString, MinLength } from 'class-validator';

export class updateCarDto {
  @IsString()
  readonly id: string;

  @IsString({ message: 'this brand is a required string' })
  readonly brand: string;

  @IsString({ message: 'this model require min 3 letter' })
  @MinLength(3)
  readonly model: string;
}
