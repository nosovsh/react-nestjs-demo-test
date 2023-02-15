import { CreateUserInput } from './create-user.input';
import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId } from 'class-validator';

export class UpdateUserInput extends PartialType(CreateUserInput) {
  @IsMongoId()
  _id: string;
}
