import { currencyPairEnum } from './enums/currency-pair.enum';
export class ChangeDataDto {
    minutes: string;
    currencyPair: currencyPairEnum;
}