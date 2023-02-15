import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderHistoryItemsModule } from 'src/order-history-items/order-history-items.module';
import { UsersModule } from 'src/users/users.module';

@Module({
  providers: [OrdersResolver, OrdersService],
  imports: [
    TypeOrmModule.forFeature([Order]),
    OrderHistoryItemsModule,
    UsersModule,
  ],
})
export class OrdersModule {}
