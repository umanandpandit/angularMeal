import { Component, OnInit } from '@angular/core';
import{ Customer } from '../customer';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  imagePath = [
    '/assets/images/image1.jpeg',
  ];

  cities = ['Ahmedabad, Bangalore, Chennai, Delhi, Hyderabad, Kolkata, Mumbai, Pune'];

  model = new Customer('','','','','','','','','');

  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor() { }

  ngOnInit(): void {
  }

}
