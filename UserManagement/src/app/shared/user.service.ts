import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
   constructor(private httpClient:HttpClient) { }

getusers(){

  // const httpHeaders =new HttpHeaders();
  // httpHeaders.append('content-type','application/json');
  return this.httpClient.get('http://localhost:3000/users');
}

createUsers(createBody){
 return this.httpClient.post('http://localhost:3000/users',createBody);
}

}
