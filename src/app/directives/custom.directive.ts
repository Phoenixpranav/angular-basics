import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private ele:ElementRef) 
  {
    this.ele.nativeElement.style.color="yellow";
   }
@HostListener('mouseover') mouseover() {
  this.ele.nativeElement.style.color='red';
  this.ele.nativeElement.style.fontWeight='700'
  
}
@HostListener('mouseleave') mouseleave() {
  this.ele.nativeElement.style.color='black';
  this.ele.nativeElement.style.fontWeight='10'
  
}
dob: Date = new Date(20,6,0)
}
