import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NbThemeModule, NbToastrModule } from '@nebular/theme';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpClientModule,
    // this will enable the default theme, you can change this by passing `{ name: 'dark' }` to enable the dark theme
    NbThemeModule.forRoot(),
    SharedModule,
    NbToastrModule.forRoot(),
  ],

  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
