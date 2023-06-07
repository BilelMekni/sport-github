import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {
// gender = 0 , gender = 1 , gender = -1
  transform(gender : string) {
    let result="";
    if (gender == "0") {
      result ="MR ";
      
    } else if (gender == "1") {
      result ="MME ";
      
    }
    return result;
    
      
    }
  }


