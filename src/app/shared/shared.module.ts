import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './component/sidebar/sidebar.component';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from  '@angular/material';
import { MatSidenavModule, MatIconModule, MatTableModule , MatToolbarModule , MatListModule , MatButtonModule  } from '@angular/material'


// add modules here
const MODULES = [
    CommonModule, 
    RouterModule,
    //  NgbModule
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
    ];

// add components here
const COMPONENTS = [
//   HeaderComponent,
//   FooterComponent,
  SidebarComponent,
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
