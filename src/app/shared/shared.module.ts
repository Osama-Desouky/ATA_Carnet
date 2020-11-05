import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './component/sidebar/sidebar.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { MatSidenavModule  } from '@angular/material/sidenav';
import { MatToolbarModule  } from '@angular/material/toolbar';
import { MatIconModule  } from '@angular/material/icon';
// import {  MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './component/header/header.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select'
import { SidebarItemsComponent } from './component/sidebar/sidebar-items/sidebar-items.component';


// add modules here
const MODULES = [
    CommonModule, 
    RouterModule,
    //  NgbModule
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatButtonModule,
    MatSelectModule,
    // MatNavList
    // MatTableModule,
    // MatListModule,
    ];

// add components here
const COMPONENTS = [
//   HeaderComponent,
//   FooterComponent,
  SidebarComponent,
  SidebarItemsComponent,
  HeaderComponent
//   NavModuleComponent,
];

// add directives here
const DIRECTIVES = [];
@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...DIRECTIVES],
})
export class SharedModule {}
