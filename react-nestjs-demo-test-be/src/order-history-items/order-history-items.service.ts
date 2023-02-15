import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId } from 'mongodb';
import { MongoRepository } from 'typeorm';
import { CreateOrderHistoryItemInput } from './dto/create-order-history-item.input';
import { UpdateOrderHistoryItemInput } from './dto/update-order-history-item.input';
import { OrderHistoryItem } from './entities/order-history-item.entity';

@Injectable()
export class OrderHistoryItemsService {
  constructor(
    @InjectRepository(OrderHistoryItem)
    private readonly orderHistoryItemRepository: MongoRepository<OrderHistoryItem>,
  ) {}

  create(createOrderHistoryItemInput: CreateOrderHistoryItemInput) {
    const orderHistoryItem = this.orderHistoryItemRepository.create(
      createOrderHistoryItemInput,
    );
    return this.orderHistoryItemRepository.save(orderHistoryItem);
  }

  findAll() {
    return `This action returns all orderHistoryItems`;
  }

  findAllByOrderId(orderId: ObjectId) {
    if (!orderId) {
      throw new Error('Order ID is required.');
    }

    const l = this.orderHistoryItemRepository.find({
      where: { orderId } as any,
      order: { createdAt: 'DESC' },
    });
    return l;
  }

  findOne(id: string) {
    return `This action returns a #${id} orderHistoryItem`;
  }

  update(id: string, updateOrderHistoryItemInput: UpdateOrderHistoryItemInput) {
    return `This action updates a #${id} orderHistoryItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderHistoryItem`;
  }
}
