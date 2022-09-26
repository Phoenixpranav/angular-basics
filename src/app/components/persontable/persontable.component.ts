import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges }  from '@angular/core';
import { Person } from 'src/app/model/Person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-persontable',
  templateUrl: './persontable.component.html',
  styleUrls: ['./persontable.component.css']
})
export class PersontableComponent implements OnInit {


  personDetails:Person[]=[];

  constructor(private personService:PersonService) { }

  ngOnInit(): void {
    this.getDetails();
  }


  getDetails(){
    this.personService.getAllPerson().subscribe(response=>{
      console.log(response);
      this.personDetails=response;
     })
  }

  handleEdit(id?:number){

  }


  handleDelete(id:number | undefined){

    console.log(id)
    this.personService.deleteByIdPerson(id).subscribe(response=>{
      alert("delete succesfully");
      this.getDetails();
    })
  }
}
