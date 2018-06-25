import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestuiComponent } from './testui/testui.component';
import { AdminuiComponent } from './adminui/adminui.component';
import { LogsComponent } from './logs/logs.component';
import { ReplayComponent } from './replay/replay.component';


const routes: Routes = [
    {
        path: '',
        component: TestuiComponent
    },

    {
        path: 'adminui',
        component: AdminuiComponent
    },

    {
        path: 'logs',
        component: LogsComponent
    },

    {
        path: 'replay',
        component: ReplayComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
