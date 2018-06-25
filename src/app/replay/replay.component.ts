import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})
export class ReplayComponent implements OnInit {

  @Input() name: string;
  public selectedDate: Date;

  first = '';
  second = '';
  date = '';
  constructor() {
  }


  ngOnInit() {
    console.log('In replay');
  }

  onClickButton() {
    this.first = (<HTMLInputElement>document.getElementById("first")).value;
    this.second = (<HTMLInputElement>document.getElementById("second")).value;
    var mainTextArea = document.getElementById("mainTextArea");
    mainTextArea.innerHTML = 'Input 1: ' + this.first + '\n' + "Input 2: " + this.second + '\n' + "Date: " + this.selectedDate;
    console.log(this.selectedDate);
  }
}
