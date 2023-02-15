import { Test, TestingModule } from '@nestjs/testing';
import { OrderHistoryItemsService } from './order-history-items.service';

describe('OrderHistoryItemsService', () => {
  let service: OrderHistoryItemsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OrderHistoryItemsService],
    }).compile();

    service = module.get<OrderHistoryItemsService>(OrderHistoryItemsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
