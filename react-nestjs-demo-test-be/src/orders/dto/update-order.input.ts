import { PartialType } from '@nestjs/mapped-types';
import {
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
  ValidateIf,
} from 'class-validator';
import { ObjectId } from 'mongodb';
import { OrderStatus } from 'src/graphql';
import { CreateOrderInput } from './create-order.input';

export class UpdateOrderInput extends PartialType(CreateOrderInput) {
  @IsMongoId()
  _id: ObjectId;

  @IsString()
  @IsMongoId()
  @ValidateIf((o) =>
    [OrderStatus.IN_PROGRESS, OrderStatus.COMPLETE].includes(o.status),
  )
  @IsNotEmpty()
  managerId: string;

  @IsOptional()
  @IsEnum(OrderStatus)
  status: OrderStatus;
}
