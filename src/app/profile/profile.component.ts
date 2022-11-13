import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  hide:boolean = true;
  hide1:boolean = true;
  hide2:boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

}
