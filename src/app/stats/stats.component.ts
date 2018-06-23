import { Component, OnInit, Input } from '@angular/core';
import { NgbdDatepickerPopup } from './datepicker-popup';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  @Input() name: string;
  public selectedDate: Date;

  first = '';
  second = '';
  date = '';
  constructor() {
    //this.selectedDate = new Date();

  }

  ngOnInit() {
  }

  onClickButton() {
    this.first = (<HTMLInputElement>document.getElementById("first")).value;
    this.second = (<HTMLInputElement>document.getElementById("second")).value;
    // this.date = (<HTMLInputElement>document.getElementById("date")).value;
    var mainTextArea = document.getElementById("mainTextArea");
    mainTextArea.innerHTML = 'Input 1: ' + this.first + '\n' + "Input 2: " + this.second + '\n' + "Date: " + this.selectedDate;
    console.log(this.selectedDate);
    //console.log(new NgbdDatepickerPopup().select);
  }
}
