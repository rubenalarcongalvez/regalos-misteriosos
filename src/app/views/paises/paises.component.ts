import { Component } from '@angular/core';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';
import { SiteComponent } from '../../shared/site/site.component';
import { GlobalService } from 'src/app/page/global.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SiteComponent, RouterLink],
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent {
  constructor(private globalService: GlobalService) {
    clearInterval(this.globalService.intervalo);
    document.title = '¡Un viaje a donde quieras!';
    let link: HTMLLinkElement = document.querySelector(
      '#iconoWeb'
    ) as HTMLLinkElement;
    if (link) {
      link.href = '/assets/plane.png';
    }
  }
}
