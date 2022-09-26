import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit,OnChanges {
  @Input() agent:any[]=[];
  @Input() title='';
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(simpleChanges:SimpleChanges):void{
    console.log("simpleChanges",simpleChanges)
  }
@Output() sendindex = new EventEmitter<any>();
handledelete(i:number){
  this.sendindex.emit(i);
} 
}
