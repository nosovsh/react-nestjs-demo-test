import { IsOptional, IsString } from 'class-validator';

export class CreateOrderInput {
  @IsOptional()
  @IsString()
  managerId: string;
}
