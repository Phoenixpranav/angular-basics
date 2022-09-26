import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Person } from '../model/Person';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
 endPointURL:string="person";
 baseURL:string=environment.baseURL;
constructor(private httpClient:HttpClient) { }



getAllPerson(){
  return this.httpClient.get<Person[]>(this.baseURL+this.endPointURL);
}


savePerson(data:any){
  return this.httpClient.post(this.baseURL+this.endPointURL,data);
}


getByIdPerson(id:number){
  return this.httpClient.get(this.baseURL+this.endPointURL+"/"+id);
}


updatePerson(id:number,data:any){
  return this.httpClient.put(this.baseURL+this.endPointURL+"/"+id,data);
}




deleteByIdPerson(id?:number){
  return this.httpClient.delete(this.baseURL+this.endPointURL+"/"+id);
}

 
}
