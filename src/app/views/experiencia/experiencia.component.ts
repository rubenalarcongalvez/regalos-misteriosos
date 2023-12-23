import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LondresHeaderComponent } from 'src/app/shared/londres-header/londres-header.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { CardComponent } from 'src/app/shared/card/card.component';

@Component({
  selector: 'app-londres-la-experiencia',
  standalone: true,
  imports: [LondresHeaderComponent, FooterComponent, CardComponent],
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class LondresLaExperienciaComponent {

}
