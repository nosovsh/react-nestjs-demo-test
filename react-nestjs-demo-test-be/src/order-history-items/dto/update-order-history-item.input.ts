import { CreateOrderHistoryItemInput } from './create-order-history-item.input';
import { PartialType } from '@nestjs/mapped-types';
import { IsMongoId } from 'class-validator';

export class UpdateOrderHistoryItemInput extends PartialType(
  CreateOrderHistoryItemInput,
) {
  @IsMongoId()
  _id: string;
}
