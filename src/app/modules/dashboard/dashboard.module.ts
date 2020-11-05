import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule} from '@angular/material/card';

import {ChartModule} from 'primeng/chart'
import { CarouselModule } from 'ngx-owl-carousel-o';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { FormsModule } from '@angular/forms';


// add modules here
const MODULES = [
  CommonModule,
  // BrowserAnimationsModule,
  DashboardRoutingModule,
  SharedModule,
  MatTableModule,
  MatPaginatorModule,
  MatIconModule,
  MatSelectModule,
  MatButtonToggleModule,
  MatCardModule,
  ChartModule,
  CarouselModule,
//   NgbModule,
//   FormsModule,
];

// add components here
const COMPONENTS = [
DashboardComponent
];

// add dynamic compnents here
const DYNAMIC_COMPONENTS = [];

// add directives here
const DIRECTIVES = [];

@NgModule({
  declarations: [...COMPONENTS, ...DYNAMIC_COMPONENTS, ...DIRECTIVES],
  imports: [...MODULES],
  entryComponents: [...DYNAMIC_COMPONENTS],
})
export class DashboardModule {}
