import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertPipe'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, metersUnit: string): any {
    if(!value){
      return '';
    }
    switch(metersUnit){
      case 'Km':
        return value / 1000;
      case 'Cm':
        return value * 100;
      default:
        return value;
    }
    return value;
  }

}
