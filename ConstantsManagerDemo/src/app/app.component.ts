import { Component } from '@angular/core';
import { AppConfig } from '../app.config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'ConstantsManagerDemo';
  apiUrl;
  constructor() {
    this.apiUrl = AppConfig.Settings.url.apiUrl;
  }
}
