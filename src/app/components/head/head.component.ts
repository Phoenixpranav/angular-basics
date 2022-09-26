import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {
  vector:string="../../assets/Ethereum-vector-logo-01.png";

  constructor() { }

  ngOnInit(): void {
  }

}
