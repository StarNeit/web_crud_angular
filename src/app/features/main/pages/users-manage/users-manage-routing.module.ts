import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { UsersManageComponent } from './users-manage.component';
import { UsersAddComponent } from './users-add/users-add.component';

const routes: Route[] = [
  {
    path: '',
    component: UsersManageComponent,
    title: 'All users',
  },
  {
    path: 'add',
    component: UsersAddComponent,
    title: 'Add new user',
  },
  {
    path: 'edit/:id',
    component: UsersAddComponent,
    title: 'Edit user',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersManageRoutingModule {}
