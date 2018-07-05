import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestuiComponent } from './testui/testui.component';
import { AdminuiComponent } from './adminui/adminui.component';
import { ReplayComponent } from './replay/replay.component';
import { SettingsComponent } from './settings/settings.component';

import { HttpClientModule } from '@angular/common/http';
import { FileDropModule } from 'ngx-file-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDatepickerPopup } from './replay/datepicker-popup';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
    declarations: [
        AppComponent,
        TestuiComponent,
        AdminuiComponent,
        ReplayComponent,
        SettingsComponent,
        NgbdDatepickerPopup
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FlexLayoutModule,
        FormsModule,
        HttpClientModule,
        FileDropModule,
        BrowserAnimationsModule,
        MaterialModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        Ng2SmartTableModule,
        NgbModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
