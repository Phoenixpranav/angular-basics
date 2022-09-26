import { Component } from '@angular/core';
import { NavigationStart, Router,Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  event$:any;
  isLogin:boolean=false;

  constructor(private router: Router) {
    
    this.event$
      =this.router.events
          .subscribe(
            (event: NavigationEvent) => {
              if(event instanceof NavigationStart) {
                console.log(event.url);
                if(event.url =="/login"  || event.url=="/"){
                  this.isLogin=true;
                }else{
                  this.isLogin=false;
                }
              }
            });

            
  }
 
  ngOnDestroy() {
    this.event$.unsubscribe();
  }
}
