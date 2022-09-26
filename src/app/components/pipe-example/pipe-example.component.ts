import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  firstname:string="richard";
  lastname:string="patel";
  salary:number=140000;
  dob:Date=new Date("2015-03-25");
  age:number= 5;

}
