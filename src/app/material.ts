import { MatNativeDateModule, MatInputModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatFormFieldModule, MatNativeDateModule, MatInputModule, MatGridListModule, MatButtonModule, MatRadioModule, MatCardModule, MatTableModule],
    exports: [MatFormFieldModule, MatNativeDateModule, MatInputModule, MatGridListModule, MatButtonModule, MatRadioModule, MatCardModule, MatTableModule]
})

export class MaterialModule { }