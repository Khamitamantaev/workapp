import { Module } from '@nestjs/common';
import { BinanceService } from './binance.service';
import { BinanceGateway } from './binance.gateway';

@Module({
  providers: [BinanceGateway, BinanceService]
})
export class BinanceModule {}
