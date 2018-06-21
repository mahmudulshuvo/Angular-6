import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClickButton() {
    var first = (<HTMLInputElement>document.getElementById("first")).value;
    var second = (<HTMLInputElement>document.getElementById("second")).value;
    var date = (<HTMLInputElement>document.getElementById("date")).value;
    var mainTextArea = document.getElementById("mainTextArea");
    mainTextArea.innerHTML = 'Input 1: ' + first + '\n' + "Input 2: " + second + '\n' + "Date: " + date;
  }
}
