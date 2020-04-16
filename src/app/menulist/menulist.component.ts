import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menulist',
  templateUrl: './menulist.component.html',
  styleUrls: ['./menulist.component.css']
})
export class MenulistComponent implements OnInit {

  imagePath = "asserts/images/logo.png";

  constructor() { }

  ngOnInit(): void {
  }

}
