import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ArticlesModule } from './articles/articles.module';
import { ConfigModule } from '@nestjs/config';
import { BinanceModule } from './binance/binance.module';
import configuration from 'config/configuration';

@Module({
  imports: [PrismaModule, ArticlesModule, ConfigModule.forRoot({
    load: [configuration],
    isGlobal: true
  }), BinanceModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
