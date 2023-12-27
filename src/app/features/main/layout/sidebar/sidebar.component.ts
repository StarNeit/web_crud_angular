import { Component } from '@angular/core';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  items: NbMenuItem[] = [
    {
      title: 'Dashboard',
      link: '/dashboard',
    },
    {
      title: 'Users',
      link: '/users',
      children: [
        {
          title: 'Manage users',
          link: '/users',
        },
        {
          title: 'Add new user',
          link: '/users/add',
        },
      ],
    },
  ];
}
