import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultLayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  NbCardModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [DefaultLayoutComponent, SidebarComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NbMenuModule,
    NbSpinnerModule,
  ],
  exports: [RouterModule],
})
export class LayoutModule {}
