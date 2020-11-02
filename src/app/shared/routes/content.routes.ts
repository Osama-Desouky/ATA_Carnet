import { Routes } from '@angular/router';
// import { DashboardComponent } from 'src/app/modules/dashboard/component/dashboard/dashboard.component';

export const content: Routes = [
//   {
//     path: 'dash',
//     component: DashboardComponent,
//   },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../../modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
 
];
