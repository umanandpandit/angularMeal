import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  imagePath = [
    
    '/assets/images/image1.jpeg',
       
  ];


  username = ''
  password = ''
  invalidLogin = false
  errorMessage = 'Invalid Credentials';
  successMessage: string;
  loginSuccess = false;

  constructor(private Router: Router,
    private loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  checkLogin(){
    if(this.loginservice.authenticate(this.username, this.password)){
      this.Router.navigate(['']);
      this.invalidLogin = false;
      this.loginSuccess = true;
      this.successMessage = 'Login Successful';
    }
    else{
      this.invalidLogin = true;
      this.loginSuccess = false;
    }
  }
}
