import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DefaultLayoutComponent } from './layout/layout.component';
import { LayoutModule } from './layout/layout.module';

const mainRoutes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    title: 'Dashboard',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/dashboard',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            m => m.DashboardModule
          ),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./pages/users-manage/users-manage.module').then(
            m => m.UsersManageModule
          ),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    LayoutModule,
    CommonModule,
    SharedModule,
    RouterModule.forChild(mainRoutes),
  ],
  exports: [RouterModule],
})
export class MainRoutingModule {}
