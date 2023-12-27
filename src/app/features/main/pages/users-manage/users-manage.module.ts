import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersManageRoutingModule } from './users-manage-routing.module';
import {
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbSpinnerModule,
  NbTreeGridModule,
} from '@nebular/theme';
import { UsersManageComponent } from './users-manage.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersManageComponent, UsersAddComponent],
  imports: [
    UsersManageRoutingModule,
    CommonModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    NbCardModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbFormFieldModule,
    NbSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [UsersManageRoutingModule],
})
export class UsersManageModule {}
