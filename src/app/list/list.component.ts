import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hide1:boolean = false;
  hide2:boolean = false;
  hide3:boolean = false;
  hide4:boolean = false;
  showDone1() {
    if (this.hide1 == true) {
      this.hide1 = false;
    } else {
      this.hide1 = true;
    }
  }
  showDone2() {
    if (this.hide2 == true) {
      this.hide2 = false;
    } else {
      this.hide2 = true;
    }
  }
  showDone3() {
    if (this.hide3 == true) {
      this.hide3 = false;
    } else {
      this.hide3 = true;
    }
  }
  showDone4() {
    if (this.hide4 == true) {
      this.hide4 = false;
    } else {
      this.hide4 = true;
    }
  }
}
