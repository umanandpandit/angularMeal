import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authenticate(username, password){
    if(username=="vikash" && password=="vikash"){
      sessionStorage.setItem('username', username);
      return true;
    }
    else{
      return false;
    }
  }

  isLoggedIn(){
    let user = sessionStorage.getItem('username');
    console.log(!(user == null));
    return !(user == null);
  }

  logout(){
    sessionStorage.revoveItem('username');
  }

  constructor() { }
}
