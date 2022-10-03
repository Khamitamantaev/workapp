import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ChangeDataDto } from './dto/change-data.dto';
import { CreateBinanceDto } from './dto/create-binance.dto';
import { UpdateBinanceDto } from './dto/update-binance.dto';
const Binance = require('node-binance-api');
@Injectable()
export class BinanceService {
  constructor(private configService: ConfigService) { }

  create(createBinanceDto: CreateBinanceDto) {
    return 'This action adds a new binance';
  }

  changeDataFromClient(_changeDataFromClient: ChangeDataDto) {
    console.log(_changeDataFromClient)
    const binance = new Binance().options({
      APIKEY: this.configService.get('binance.api_key'),
      APISECRET: this.configService.get('binance.secret_key'),
    });

    binance.futuresMiniTickerStream(miniTicker => console.log(miniTicker.find(tick => tick.symbol === _changeDataFromClient.currencyPair)));

  }

  findAll() {
    return `This action returns all binance`;
  }

  findOne(id: number) {
    return `This action returns a #${id} binance`;
  }

  update(id: number, updateBinanceDto: UpdateBinanceDto) {
    return `This action updates a #${id} binance`;
  }

  remove(id: number) {
    return `This action removes a #${id} binance`;
  }
}
