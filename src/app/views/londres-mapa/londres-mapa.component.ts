import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LondresHeaderComponent } from 'src/app/shared/londres-header/londres-header.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';

@Component({
  selector: 'app-londres-mapa',
  standalone: true,
  imports: [CommonModule, LondresHeaderComponent, FooterComponent],
  templateUrl: './londres-mapa.component.html',
  styleUrls: ['./londres-mapa.component.css']
})
export class LondresMapaComponent {

}
