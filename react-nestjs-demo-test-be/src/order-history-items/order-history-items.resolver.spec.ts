import { Test, TestingModule } from '@nestjs/testing';
import { OrderHistoryItemsResolver } from './order-history-items.resolver';
import { OrderHistoryItemsService } from './order-history-items.service';

describe('OrderHistoryItemsResolver', () => {
  let resolver: OrderHistoryItemsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderHistoryItemsResolver, OrderHistoryItemsService],
    }).compile();

    resolver = module.get<OrderHistoryItemsResolver>(OrderHistoryItemsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
