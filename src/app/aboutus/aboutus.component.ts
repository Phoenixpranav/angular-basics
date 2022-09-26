import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mypara:any={};
  handlehover()
  {
    this.mypara={
      'font-weight':600,
      'font-style': 'italic',
      'background-color': 'beige'
    };
  }
handleleave()
{
  
  this.mypara={
    'font-weight':100,
    'font-style': 'normal'
  };
}
}
function handlehover() {
  throw new Error('Function not implemented.');
}

