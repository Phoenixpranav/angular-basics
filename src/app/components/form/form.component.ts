import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  id:number=0;
  name:string="";
  cost:number=0;
  warranty:string="";
  productdetails:any[]=[];
handlesubmit()
{
  let details={
    id:this.id,
    name:this.name,
    cost:this.cost,
    warranty:this.warranty
  }
  this.productdetails.push(details);
}
}
