import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name:'concat'

})
export class Concatpipe implements PipeTransform{
  transform(value:string,args?:string) 
  {
    return value+"_"+args;
      
  }
}
