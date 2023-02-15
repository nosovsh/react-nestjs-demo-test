import { ObjectId } from 'mongodb';
import { OrderStatus } from 'src/graphql';
import { Column, CreateDateColumn, Entity, ObjectIdColumn } from 'typeorm';

@Entity()
export class OrderHistoryItem {
  @ObjectIdColumn()
  _id: ObjectId;

  @CreateDateColumn()
  createdAt: Date;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.OPEN,
  })
  status: OrderStatus;

  @ObjectIdColumn()
  orderId: ObjectId;
}
