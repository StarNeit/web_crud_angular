import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { APIInterceptor } from './interceptors/api-interceptor';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    },
    {
      provide: 'BASE_API_URL',
      useValue: environment.apiUrl,
    },
  ],
})
export class CoreModule {}
