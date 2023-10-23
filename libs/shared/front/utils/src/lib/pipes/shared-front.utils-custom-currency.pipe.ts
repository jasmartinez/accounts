import { CurrencyPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

const defaultBitcoinValue = `0.0 BTC`;

@Pipe({
  name: 'customCurrency',
})
export class SharedFrontUtilsCustomCurrencyPipe implements PipeTransform {
  constructor(private readonly currency: CurrencyPipe) {}
  transform(value: number | null, btc = false): string | null {
    // Valid
    if (!Number.isNaN(Number(value))) {
      if (btc === false) {
        return this.currency.transform(value, 'USD', 'symbol');
      }
      return `${value} BTC`;
    }
    // Invalid 
    if (!btc) {
      return this.currency.transform(0, 'USD', 'symbol');
    }
    return defaultBitcoinValue;
  }
}
