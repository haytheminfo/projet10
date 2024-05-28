import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private islocalStorageAvailable = typeof localStorage !== undefined;
  constructor(private httpClient:HttpClient) { }
  authenticate(username: any, password: any) {

    let userData:any = this.httpClient.post('http://ams.smart-it-partner.com:7006/api/auth/signin',
    {"username":username,"password":password}).pipe(
      map(
        (data:any) => {
          if (this.islocalStorageAvailable)
            {
              sessionStorage.setItem('jwtToken', data.accessToken);
              sessionStorage.setItem('username', data.username);
              userData = data;
              console.log(data);
            }


        }
      )
    );
    return userData;
  }
  isUserLoggedIn() {
    if ( this.islocalStorageAvailable){
    let user = sessionStorage.getItem('username')
 return !(user === null)}
    return false;

    }
    logOut() {
      sessionStorage.removeItem('username')
    }


  }

