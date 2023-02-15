import { ObjectId } from 'mongodb';
import { OrderStatus } from 'src/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ObjectIdColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Order {
  @ObjectIdColumn()
  _id: ObjectId;

  @Column({
    type: 'enum',
    enum: OrderStatus,
    default: OrderStatus.OPEN,
  })
  status: OrderStatus = OrderStatus.OPEN;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  managerId: ObjectId;

  @UpdateDateColumn()
  updatedAt: Date;
}
