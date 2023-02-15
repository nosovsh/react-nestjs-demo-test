import { Module } from '@nestjs/common';
import { OrderHistoryItemsService } from './order-history-items.service';
import { OrderHistoryItemsResolver } from './order-history-items.resolver';
import { OrderHistoryItem } from './entities/order-history-item.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  providers: [OrderHistoryItemsResolver, OrderHistoryItemsService],
  imports: [TypeOrmModule.forFeature([OrderHistoryItem])],
  exports: [OrderHistoryItemsService],
})
export class OrderHistoryItemsModule {}
