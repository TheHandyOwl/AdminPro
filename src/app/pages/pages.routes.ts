import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromiseComponent } from './promise/promise.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { LoginGuardGuard } from '../services/service.index';
import { ProfileComponent } from './profile/profile.component';

const pagesRoutes: Routes = [
    { path : '',
    component : PagesComponent,
    canActivate: [ LoginGuardGuard ],
    children: [
        { path : 'dashboard', component : DashboardComponent, data: { title: 'Dashboard' } },
        { path : 'progress', component : ProgressComponent, data: { title: 'ProgressBar' } },
        { path : 'graphics1', component : Graphics1Component, data: { title: 'Graficas' } },
        { path : 'promise', component : PromiseComponent, data: { title: 'Promesas' } },
        { path : 'rxjs', component : RxjsComponent, data: { title: 'RXJS' } },
        { path : 'account-settings', component : AccountSettingsComponent, data: { title: 'Configuracion temas' } },
        { path : 'profile', component : ProfileComponent, data: { title: 'Perfil de usuario' } },
        { path : '', redirectTo: 'dashboard', pathMatch: 'full'},
    ]}
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);














