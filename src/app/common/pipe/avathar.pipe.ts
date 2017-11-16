import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'avathar'
})
export class AvatharPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let res;
    var matches = value.match(/\b(\w)/g);
    res = matches.join('');
    return res.substring(0, 2);
  }

}
