import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminui',
  templateUrl: './adminui.component.html',
  styleUrls: ['./adminui.component.css']
})
export class AdminuiComponent implements OnInit {



  constructor() { }

  ngOnInit() {

  }

  onClickOne() {
    console.log('B-1 clicked');
    var radioOne = <HTMLInputElement>document.getElementById("radio1");
    var radioTwo = <HTMLInputElement>document.getElementById("radio2");
    var radioThree = <HTMLInputElement>document.getElementById("radio3");
    var textArea = document.getElementById("textArea");

    if (radioOne.checked) {
      console.log('radio1 checked');
      textArea.innerHTML = 'Buttion-1 clicked \nRadio-1 selected';
    }
    if (radioTwo.checked) {
      console.log('radio2 checked');
      textArea.innerHTML = 'Buttion-1 clicked \nRadio-2 selected';
    }
    if (radioThree.checked) {
      console.log('radio3 checked');
      textArea.innerHTML = 'Buttion-1 clicked \nRadio-3 selected';
    }
  }

  onClickTwo() {
    console.log('B-2 clicked');
    var radioOne = <HTMLInputElement>document.getElementById("radio1");
    var radioTwo = <HTMLInputElement>document.getElementById("radio2");
    var radioThree = <HTMLInputElement>document.getElementById("radio3");
    var textArea = document.getElementById("textArea");

    if (radioOne.checked) {
      console.log('radio1 checked');
      textArea.innerHTML = 'Buttion-2 clicked \nRadio-1 selected';
    }
    if (radioTwo.checked) {
      console.log('radio2 checked');
      textArea.innerHTML = 'Buttion-2 clicked \nRadio-2 selected';
    }
    if (radioThree.checked) {
      console.log('radio3 checked');
      textArea.innerHTML = 'Buttion-2 clicked \nRadio-3 selected';
    }
  }
}
