import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class updateCarDto {
  @IsOptional()
  // isOptional for optional validation
  @IsUUID()
  // isUUID for validation UUID
  @IsString()
  readonly id?: string;

  @IsOptional()
  @IsString({ message: 'this brand is a required string' })
  readonly brand: string;

  @IsOptional()
  @IsString({ message: 'this model require min 3 letter' })
  @MinLength(3)
  readonly model: string;
}
