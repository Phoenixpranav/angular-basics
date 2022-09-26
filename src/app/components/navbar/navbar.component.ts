import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }
 
  ngOnInit(): void {
  }
 sidebar:any[]=[
  {path:"/home",page:"Home" },
  {path:"/aboutus",page:"AboutUs" },
  
  {path:"/product",page:"Product" },
  {path:"/form",page:"Form" },
  {path:"/host-example",page:"Host-example"},
  {path:"/pipe-example",page:"Pipe-example"},
  {path:"/admin",page:"Admin"},
  {path:"/agent",page:"Agent"},
  {path:"/reactive-form",page:"Person Form"},
  {path:"/persontable",page:"Person Table"},
  {path:"/login",page:"logout" },

  ]

  handleNavigate(item:any){
   this.router.navigateByUrl(item.path);
  }

}
//
