import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Our Modules
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

// ng2-charts
import { ChartsModule } from 'ng2-charts';

// Our components
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { IncrementerComponent } from '../components/incrementer/incrementer.component';
import { PolarGraphicsComponent } from '../components/polar-graphics/polar-graphics.component';


@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
    IncrementerComponent,
    PolarGraphicsComponent
  ],
  imports: [
    SharedModule,
    PAGES_ROUTES,
    FormsModule,
    ChartsModule
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Graphics1Component,
  ]
})
export class PagesModule { }
