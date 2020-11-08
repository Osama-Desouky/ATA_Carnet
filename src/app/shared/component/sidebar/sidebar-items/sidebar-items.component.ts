import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav'

@Component({
  selector: 'app-sidebar-items',
  templateUrl: './sidebar-items.component.html',
  styleUrls: ['./sidebar-items.component.scss']
})
export class SidebarItemsComponent  {

  @ViewChild('sidenav') sidenav: MatSidenav;
  isExpanded = true;
  showSubmenu: boolean = true;
  isShowing = false;
  showSubSubMenu: boolean = false;

  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }

}