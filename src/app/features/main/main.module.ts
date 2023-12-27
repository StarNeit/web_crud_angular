import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';
import { LayoutService } from './services/layout.service';

@NgModule({
  providers: [LayoutService],
  imports: [CommonModule, RouterModule, MainRoutingModule],
})
export class MainModule {}
