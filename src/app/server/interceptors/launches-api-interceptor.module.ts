import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LaunchesApiUrlInterceptor } from './launches-api-interceptor';

@NgModule({
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LaunchesApiUrlInterceptor,
      multi: true,
    },
  ],
})
export class LaunchesInterceptorsModule {}
