import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectId } from 'mongodb';
import { OrderStatus } from 'src/graphql';
import { OrderHistoryItemsService } from 'src/order-history-items/order-history-items.service';
import { UsersService } from 'src/users/users.service';
import { MongoRepository } from 'typeorm';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { Order } from './entities/order.entity';

const statusFlow = [
  OrderStatus.OPEN,
  OrderStatus.IN_PROGRESS,
  OrderStatus.COMPLETE,
];

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: MongoRepository<Order>,
    private readonly orderHistoryItemService: OrderHistoryItemsService,
    private readonly usersService: UsersService,
  ) {}

  async create(createOrderInput: CreateOrderInput) {
    const order = this.orderRepository.create();
    const savedOrder = await this.orderRepository.save(order);
    await this.orderHistoryItemService.create({
      status: savedOrder.status,
      orderId: savedOrder._id,
    });
    return savedOrder;
  }

  findAll() {
    return this.orderRepository.find({ order: { createdAt: 'DESC' } });
  }

  findOne(id: string) {
    return this.orderRepository.findOneBy(id);
  }

  async update(id: ObjectId, updateOrderInput: UpdateOrderInput) {
    const order = await this.orderRepository.findOneBy(id);
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    const nextPossibleStatus = statusFlow[statusFlow.indexOf(order.status) + 1];
    if (updateOrderInput.status && updateOrderInput.status !== order.status) {
      if (nextPossibleStatus !== updateOrderInput.status) {
        throw new BadRequestException('Invalid status.');
      }
      await this.orderHistoryItemService.create({
        status: updateOrderInput.status,
        orderId: order._id,
      });
    }
    if (
      updateOrderInput.managerId &&
      order.managerId?.toString() !== updateOrderInput.managerId
    ) {
      console.log('loading');

      const userId = await this.usersService.findOne(
        updateOrderInput.managerId,
      );
      if (!userId) {
        throw new BadRequestException("Manager doesn't exist.");
      }
    }

    return this.orderRepository.save({
      ...order,
      ...updateOrderInput,
      _id: order._id,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
