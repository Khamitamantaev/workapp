import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { BinanceService } from './binance.service';
import { ChangeDataDto } from './dto/change-data.dto';
import { CreateBinanceDto } from './dto/create-binance.dto';
import { UpdateBinanceDto } from './dto/update-binance.dto';

@WebSocketGateway()
export class BinanceGateway {
  constructor(private readonly binanceService: BinanceService) {}

  @SubscribeMessage('createBinance')
  create(@MessageBody() createBinanceDto: CreateBinanceDto) {
    return this.binanceService.create(createBinanceDto);
  }

  @SubscribeMessage('changeDataBinance')
  async changeData(@MessageBody() changeDataFromClient: ChangeDataDto) {
    return this.binanceService.changeDataFromClient(changeDataFromClient)
  }

  @SubscribeMessage('findAllBinance')
  findAll() {
    return this.binanceService.findAll();
  }

  @SubscribeMessage('findOneBinance')
  findOne(@MessageBody() id: number) {
    return this.binanceService.findOne(id);
  }

  @SubscribeMessage('updateBinance')
  update(@MessageBody() updateBinanceDto: UpdateBinanceDto) {
    return this.binanceService.update(updateBinanceDto.id, updateBinanceDto);
  }

  @SubscribeMessage('removeBinance')
  remove(@MessageBody() id: number) {
    return this.binanceService.remove(id);
  }
}
