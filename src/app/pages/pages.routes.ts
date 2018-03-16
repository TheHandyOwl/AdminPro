import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromiseComponent } from './promise/promise.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const pagesRoutes: Routes = [
    { path : '',
    component : PagesComponent,
    children: [
        { path : 'dashboard', component : DashboardComponent},
        { path : 'progress', component : ProgressComponent},
        { path : 'graphics1', component : Graphics1Component},
        { path : 'promise', component : PromiseComponent},
        { path : 'rxjs', component : RxjsComponent},
        { path : 'account-settings', component : AccountSettingsComponent},
        { path : '', redirectTo: 'dashboard', pathMatch: 'full'},
    ]}
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);














