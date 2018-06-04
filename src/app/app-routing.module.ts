import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestuiComponent } from './testui/testui.component';
import { AdminuiComponent } from './adminui/adminui.component';
import { LogsComponent } from './logs/logs.component';
import { StatsComponent } from './stats/stats.component';

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
    path: 'stats',
    component: StatsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
