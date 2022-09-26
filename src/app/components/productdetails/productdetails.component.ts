import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  productdetails:any[]=[
    {id:1,name:'laptop',cost:'125000',warranty:'n'},
    {id:2,name:'mobile',cost:'10000',warranty:' '},
    {id:3,name:'bike',cost:'425000',warranty:'y'}
  ];
}
