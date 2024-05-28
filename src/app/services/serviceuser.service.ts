import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceuserService {

  
  constructor(private http:HttpClient) { }


getuser(){
  return this.http.get("https://jsonplaceholder.typicode.com/users");
}


}
