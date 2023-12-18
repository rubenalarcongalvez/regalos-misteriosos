import { Component } from '@angular/core';
import { GlobalService } from './page/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  contador = 0;
  started: boolean = false;

  constructor(private globalService: GlobalService) {
    if (this.started == false) {
      this.started = true;

      this.globalService.intervalo = setInterval(() => {
        if (document.title == 'Regalo Misterioso') {
          document.title = 'Mystery Gift';
        } else {
          document.title = 'Regalo Misterioso';
        }
      }, 2000);
    }
  }
}
