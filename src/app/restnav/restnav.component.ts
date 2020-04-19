import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restnav',
  templateUrl: './restnav.component.html',
  styleUrls: ['./restnav.component.css']
})
export class RestnavComponent implements OnInit {

  imagePath = "asserts/images/logo.png";
  
  constructor() { }

  ngOnInit(): void {
  }

}
