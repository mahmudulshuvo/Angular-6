import { Component } from '@angular/core';
import { StatsComponent } from './stats.component';

@Component({
    selector: 'ngbd-datepicker-popup',
    templateUrl: './datepicker-popup.html'
})
export class NgbdDatepickerPopup {
    model;

    select(d) {
        console.log(d);
        // return d;
    }

}