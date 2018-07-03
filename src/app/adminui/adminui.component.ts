import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-adminui',
    templateUrl: './adminui.component.html',
    styleUrls: ['./adminui.component.css']
})
export class AdminuiComponent implements OnInit {

    selectedRadio = '1';
    textArea = '';

    constructor() { }

    ngOnInit() {

    }

    onClickOne() {
        console.log('B-1 clicked');

        if (this.selectedRadio == '1') {
            this.textArea = 'Buttion-1 clicked \nRadio-1 selected'
        }

        if (this.selectedRadio == '2') {
            this.textArea = 'Buttion-1 clicked \nRadio-2 selected'
        }

        if (this.selectedRadio == '3') {
            this.textArea = 'Buttion-1 clicked \nRadio-3 selected'
        }
    }

    onClickTwo() {
        console.log('B-2 clicked');

        if (this.selectedRadio == '1') {
            this.textArea = 'Buttion-2 clicked \nRadio-1 selected'
        }

        if (this.selectedRadio == '2') {
            this.textArea = 'Buttion-2 clicked \nRadio-2 selected'
        }

        if (this.selectedRadio == '3') {
            this.textArea = 'Buttion-2 clicked \nRadio-3 selected'
        }
    }
}
