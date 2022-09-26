import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  agentName:string="";
  agentContact:number=0;
  agentDetails:any[]=[];

  handlesubmit(){
   
    this.agentDetails.push(
      { name:this.agentName,
        contact:this.agentContact}
      );
    
console.log(this.agentDetails)
  }
getindex(i:number){
  this.agentDetails.splice(i,1);
}
}
