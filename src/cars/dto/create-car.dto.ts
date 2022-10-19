// dto is a data transfer object
import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
  // @IsString() is a decorator for validation

  //change default message
  @IsString({ message: 'the brand must be a string' })
  readonly brand: string;

  @IsString()
  // @minLength is a decorator for validation with a min length
  @MinLength(3, { message: 'the model must be at least 3 characters' })
  readonly model: string;
}
