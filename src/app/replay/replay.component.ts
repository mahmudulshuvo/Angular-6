import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})

export class ReplayComponent implements OnInit {

  // @Input() name: string;
  // public selectedDate: Date;

  // first = '';
  // second = '';
  // date = '';
  // constructor() {
  // }


  // ngOnInit() {
  //   console.log('In replay');
  // }

  // onClickButton() {
  //   this.first = (<HTMLInputElement>document.getElementById("first")).value;
  //   this.second = (<HTMLInputElement>document.getElementById("second")).value;
  //   var mainTextArea = document.getElementById("mainTextArea");
  //   mainTextArea.innerHTML = 'Input 1: ' + this.first + '\n' + "Input 2: " + this.second + '\n' + "Date: " + this.selectedDate;
  //   console.log(this.selectedDate);
  // }

  @Input() name: string;
  public selectedDate: Date;

  first = '';
  second = '';
  third = '';
  fourth = '';
  fifth = '';
  date = '';
  dynamicLabel = '';
  constructor() {
  }


  ngOnInit() {
  }

  // tiles = [
  //   { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
  //   { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
  //   { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
  //   { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  // ];

  onClickButton() {
    console.log('Button pressed ' + this.first + ' ' + this.second + ' ' + this.third + ' ' + this.fourth + ' ' + this.fifth + ' ' + this.date);
    this.dynamicLabel = this.date;
    var mainTextArea = document.getElementById("mainTextArea");
    mainTextArea.innerHTML = 'First: ' + this.first + '\n' + "Second: " + this.second + '\n' + "Third: " + this.third + '\n' + "Fourth: " + this.fourth + '\n' + "Fifth: " + this.fifth + '\n' + "Date: " + this.date;
  }

}
