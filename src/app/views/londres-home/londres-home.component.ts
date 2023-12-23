import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalService } from 'src/app/page/global.service';
import { RouterOutlet } from '@angular/router';
import { LondresHeaderComponent } from 'src/app/shared/londres-header/londres-header.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';

@Component({
  selector: 'app-londres-home',
  standalone: true,
  imports: [LondresHeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './londres-home.component.html',
  styleUrls: ['./londres-home.component.css'],
})
export class LondresHomeComponent {
  constructor(private globalService: GlobalService) {
    clearInterval(this.globalService.intervalo);
    document.title = '¡Un viaje a Londres!';
    let link: HTMLLinkElement = document.querySelector(
      '#iconoWeb'
    ) as HTMLLinkElement;
    if (link) {
      link.href = '/assets/bandera_uk.png';
    }
  }
}
