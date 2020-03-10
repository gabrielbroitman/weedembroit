import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: number,
    decimalLength: number = 2,
    chunkDelimiter: string = '.',
    decimalDelimiter: string = ','): string {

    if (!value) {
      value = 0;
    }

    const result = '\\d(?=(\\d{3})+' + (decimalLength > 0 ? '\\D' : '$') + ')';
    const num = value.toFixed(Math.max(0, ~~decimalLength));

    return 'R$' + ' ' + (decimalDelimiter ? num.replace('.', decimalDelimiter) : num).replace(new RegExp(result, 'g'), '$&' + chunkDelimiter);
  }
}
