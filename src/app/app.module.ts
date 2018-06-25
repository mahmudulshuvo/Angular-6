import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestuiComponent } from './testui/testui.component';
import { AdminuiComponent } from './adminui/adminui.component';
import { LogsComponent } from './logs/logs.component';
import { ReplayComponent } from './replay/replay.component';

import { HttpClientModule } from '@angular/common/http';
import { FileDropModule } from 'ngx-file-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbdDatepickerPopup } from './replay/datepicker-popup';


@NgModule({
  declarations: [
    AppComponent,
    TestuiComponent,
    AdminuiComponent,
    LogsComponent,
    ReplayComponent,
    NgbdDatepickerPopup

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    FileDropModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
