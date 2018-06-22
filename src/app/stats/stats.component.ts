import { Component, OnInit } from '@angular/core';
import { NgbdDatepickerPopup } from './datepicker-popup';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  first = '';
  second = '';
  date = '';
  constructor() { }

  ngOnInit() {
  }

  onClickButton() {
    this.first = (<HTMLInputElement>document.getElementById("first")).value;
    this.second = (<HTMLInputElement>document.getElementById("second")).value;
    // this.date = (<HTMLInputElement>document.getElementById("date")).value;
    var mainTextArea = document.getElementById("mainTextArea");
    mainTextArea.innerHTML = 'Input 1: ' + this.first + '\n' + "Input 2: " + this.second + '\n' + "Date: " + this.date;
    //console.log(new NgbdDatepickerPopup().select);
  }
}
