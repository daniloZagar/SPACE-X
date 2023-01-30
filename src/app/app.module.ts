import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchesInterceptorsModule } from './server/interceptors/launches-api-interceptor.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LaunchesInterceptorsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
