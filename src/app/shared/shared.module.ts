import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { PagedidnotfoundComponent } from './pagedidnotfound/pagedidnotfound.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SharedService } from '../services/service.index';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    PipesModule
  ],
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
