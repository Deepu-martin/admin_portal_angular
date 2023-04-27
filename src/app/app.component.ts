import { Component } from '@angular/core';
import { secrets } from 'src/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'admin_portal_angular';
  ngOnInit() {
    console.log(secrets.NG_ENV);
  }
}
