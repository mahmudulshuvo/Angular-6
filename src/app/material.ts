import { MatNativeDateModule, MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatFormFieldModule, MatNativeDateModule, MatInputModule, MatGridListModule, MatButtonModule],
    exports: [MatFormFieldModule, MatNativeDateModule, MatInputModule, MatGridListModule, MatButtonModule]
})

export class MaterialModule { }