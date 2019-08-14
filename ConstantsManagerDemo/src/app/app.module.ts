import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AppComponent } from './app.component';
import { AppConfig } from '../app.config.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';


export function initConfig(appConfig: AppConfig) {
  return () => appConfig.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
     AppConfig, { provide: APP_INITIALIZER, useFactory: initConfig, deps: [AppConfig], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
