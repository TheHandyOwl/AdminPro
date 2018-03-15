import { NgModule } from '@angular/core';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { PagedidnotfoundComponent } from './pagedidnotfound/pagedidnotfound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedService } from '../services/shared.service';


@NgModule({
  declarations: [
    BreadcrumbsComponent,
    HeaderComponent,
    PagedidnotfoundComponent,
    SidebarComponent,
  ],
  exports: [
    BreadcrumbsComponent,
    HeaderComponent,
    PagedidnotfoundComponent,
    SidebarComponent,
  ]
})

export class SharedModule { }
