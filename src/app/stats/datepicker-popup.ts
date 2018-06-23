<<<<<<< HEAD
// import { Component } from '@angular/core';
// import { StatsComponent } from './stats.component';

// new code starts
import { Component, OnInit, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, } from '@angular/forms';

export const DATEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NgbdDatepickerPopup),
    multi: true
};
// new code ends

@Component({
    selector: 'ngbd-datepicker-popup',
    templateUrl: './datepicker-popup.html',
    providers: [DATEPICKER_VALUE_ACCESSOR] // new code
})

// export class NgbdDatepickerPopup {
//     model;

//     select(d) {
//         console.log(d);
//         // return d;
//     }

// }

// new code stars
export class NgbdDatepickerPopup implements ControlValueAccessor {

    selectedDate: any;
    disabled = false;

    // Function to call when the date changes.
    onChange = (date?: Date) => {
        console.log('Date changed');
    };

    // Function to call when the date picker is touched
    onTouched = () => { };

    writeValue(value: Date) {
        if (!value) return;
        this.selectedDate = {
            year: value.getFullYear(),
            month: value.getMonth(),
            day: value.getDate()
        }
    }

    registerOnChange(fn: (date: Date) => void): void {
        this.onChange = fn;
    }

    // Allows Angular to register a function to call when the input has been touched.
    // Save the function as a property to call later here.
    registerOnTouched(fn: () => void): void {
        this.onTouched = fn;
    }

    // Allows Angular to disable the input.
    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    // Write change back to parent
    onDateChange(value: Date) {
        this.onChange(value);
    }

    // Write change back to parent
    onDateSelect(value: any) {
        this.onChange(new Date(value.year, value.month - 1, value.day));
=======
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
>>>>>>> 0ed37bcc9cdb619955e020e2435354b93699a09c
    }

}