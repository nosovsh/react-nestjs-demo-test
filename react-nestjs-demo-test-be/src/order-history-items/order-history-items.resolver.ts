import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { OrderHistoryItemsService } from './order-history-items.service';
import { CreateOrderHistoryItemInput } from './dto/create-order-history-item.input';
import { UpdateOrderHistoryItemInput } from './dto/update-order-history-item.input';

@Resolver('OrderHistoryItem')
export class OrderHistoryItemsResolver {
  constructor(
    private readonly orderHistoryItemsService: OrderHistoryItemsService,
  ) {}

  @Mutation('createOrderHistoryItem')
  create(
    @Args('createOrderHistoryItemInput')
    createOrderHistoryItemInput: CreateOrderHistoryItemInput,
  ) {
    return this.orderHistoryItemsService.create(createOrderHistoryItemInput);
  }

  @Query('orderHistoryItems')
  findAll() {
    return this.orderHistoryItemsService.findAll();
  }

  @Query('orderHistoryItem')
  findOne(@Args('id') id: string) {
    return this.orderHistoryItemsService.findOne(id);
  }

  @Mutation('updateOrderHistoryItem')
  update(
    @Args('updateOrderHistoryItemInput')
    updateOrderHistoryItemInput: UpdateOrderHistoryItemInput,
  ) {
    return this.orderHistoryItemsService.update(
      updateOrderHistoryItemInput._id,
      updateOrderHistoryItemInput,
    );
  }

  @Mutation('removeOrderHistoryItem')
  remove(@Args('id') id: number) {
    return this.orderHistoryItemsService.remove(id);
  }
}
