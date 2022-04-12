import { Module } from '@nestjs/common';
import { PurchasesController } from './controllers/purchases.controller';

// HTTP (MVC)
// HTTP (KAFKA RECEPTER)

@Module({
  controllers: [PurchasesController],
})
export class MessagingModule {}
