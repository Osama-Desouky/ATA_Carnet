import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MatSidenavModule  } from '@angular/material/sidenav';
import { MatToolbarModule  } from '@angular/material/toolbar';
import { MatIconModule  } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './component/header/header.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select'
import { SidebarItemsComponent } from './component/sidebar/sidebar-items/sidebar-items.component';
import { FooterComponent } from './component/footer/footer.component';


// add modules here
const MODULES = [
    CommonModule, 
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatButtonModule,
    MatSelectModule,
    ];

// add components here
const COMPONENTS = [
  SidebarComponent,
  SidebarItemsComponent,
  HeaderComponent,
  FooterComponent
];

// add directives here
const DIRECTIVES = [];
@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES],
  imports: [...MODULES],
  exports: [...COMPONENTS, ...DIRECTIVES],
})
export class SharedModule {}
