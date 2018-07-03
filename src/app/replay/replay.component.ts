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
    third = '';
    fourth = '';
    fifth = '';
    date = '';
    dynamicLabel = '';
    mainTextArea = '';
    constructor() {
    }


    ngOnInit() {
    }

    onClickButton() {
        console.log('Button pressed ' + this.first + ' ' + this.second + ' ' + this.third + ' ' + this.fourth + ' ' + this.fifth + ' ' + this.date);
        this.dynamicLabel = this.date;
        this.mainTextArea = 'First: ' + this.first + '\n' + "Second: " + this.second + '\n' + "Third: " + this.third + '\n' + "Fourth: " + this.fourth + '\n' + "Fifth: " + this.fifth + '\n' + "Date: " + this.date;
    }

}
