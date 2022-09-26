import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  admin:string='';
  password:string='';
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 
  handleclick(){
    if(this.admin=="pranav" && this.password=="1234")
    {      
    alert ("welcome"+this.admin);
    this.router.navigateByUrl("/home")
    }
    else{
      alert ("Invalid UserId or Password");
    }
  }

}
