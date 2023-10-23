import { Pipe, PipeTransform } from '@angular/core';
import { SharedFrontUtilsCustomCurrencyPipe } from './shared-front.utils-custom-currency.pipe';

@Pipe({
  name: 'amount',
})
export class SharedFrontUtilsAmountPipe implements PipeTransform {
  constructor(private customCurrencyPipe: SharedFrontUtilsCustomCurrencyPipe) {}
  transform(
    value: number | null,
    exchangeRate: number | null
  ): string | null {
    // Valid
    if (!Number.isNaN(Number(value)) && !Number.isNaN(Number(exchangeRate))) {
      const amount = (value || 0) * (exchangeRate || 0);
      return this.customCurrencyPipe.transform(amount, false);
    }
    // Invalid
    return this.customCurrencyPipe.transform(0, false);
  }
}
