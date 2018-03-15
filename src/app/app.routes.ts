import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { PagedidnotfoundComponent } from './shared/pagedidnotfound/pagedidnotfound.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

const appRoutes: Routes = [
    { path : 'login', component : LoginComponent},
    { path : 'register', component : RegisterComponent},
    { path : '**', component: PagedidnotfoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true } );














