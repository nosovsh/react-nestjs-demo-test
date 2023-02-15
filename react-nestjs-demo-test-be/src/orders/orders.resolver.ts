import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { OrderHistoryItemsService } from 'src/order-history-items/order-history-items.service';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { Order } from './entities/order.entity';
import { OrdersService } from './orders.service';

@Resolver('Order')
export class OrdersResolver {
  constructor(
    private readonly ordersService: OrdersService,
    private readonly orderHistoryItemsService: OrderHistoryItemsService,
  ) {}

  @Mutation('createOrder')
  create(@Args('createOrderInput') createOrderInput: CreateOrderInput) {
    return this.ordersService.create(createOrderInput);
  }

  @Query('orders')
  findAll() {
    return this.ordersService.findAll();
  }

  @Query('order')
  findOne(@Args('id') id: string) {
    return this.ordersService.findOne(id);
  }

  @Mutation('updateOrder')
  update(@Args('updateOrderInput') updateOrderInput: UpdateOrderInput) {
    return this.ordersService.update(updateOrderInput._id, updateOrderInput);
  }

  @Mutation('removeOrder')
  remove(@Args('id') id: number) {
    return this.ordersService.remove(id);
  }

  @ResolveField()
  async orderHistoryItems(@Parent() order: Order) {
    const { _id } = order;
    return this.orderHistoryItemsService.findAllByOrderId(_id);
  }
}
