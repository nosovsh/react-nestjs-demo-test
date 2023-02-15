import { IsEnum, IsMongoId } from 'class-validator';
import { ObjectId } from 'mongodb';
import { OrderStatus } from 'src/graphql';

export class CreateOrderHistoryItemInput {
  @IsEnum(OrderStatus)
  status: OrderStatus;

  @IsMongoId()
  orderId: ObjectId;
}
