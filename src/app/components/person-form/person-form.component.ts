import { C } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  form!: FormGroup;
  submitted: boolean = false;
  id:number=0;
  isUpdate:boolean=false;

  constructor(private formBuilder: FormBuilder, private personService: PersonService,private router:Router) { }

  ngOnInit(): void {
  this.initiateForm();
   this.getById();
    
  }


  getById(){

    console.log(history.state.id)

    if(history?.state?.id){
      this.id=history.state.id;
      this.isUpdate=true;
    
      this.personService.getByIdPerson(this.id).subscribe((response:any)=>{
        console.log(response);
        // this.form.patchValue({
          //...response,
        //   fullName:response.fullname,
        // key:value
        // })

//spread operator ...
        this.form.patchValue({...response})
      })

    }

  }
  initiateForm(){
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20)
          ]
        ],
        email: ['', [Validators.required, Validators.email]],
      }
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.form)
    if (this.form.invalid) {
      return;
    }

    if(this.isUpdate){
      this.updatePerson();
    }else{
      this.savePerson();
    }
    console.log(this.form.value);
  }

  savePerson(){
    this.personService.savePerson(this.form.value).subscribe(response => {
      alert(this.form.value.fullname + "saved succesfully");
      this.router.navigateByUrl("/persontable")
    }, (err) => {
      console.log("error" + err)
    });
  }

  updatePerson(){
    this.personService.updatePerson(this.id,this.form.value).subscribe(response=>{
      alert("updated succesfully");
      this.router.navigateByUrl('/persontable')
    })
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
