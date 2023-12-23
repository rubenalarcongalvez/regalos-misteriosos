import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LondresHeaderComponent } from 'src/app/shared/londres-header/londres-header.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { DedicatoriaComponent } from 'src/app/shared/dedicatoria/dedicatoria.component';

@Component({
  selector: 'app-londres-dedicatorias',
  standalone: true,
  imports: [LondresHeaderComponent, FooterComponent, DedicatoriaComponent],
  templateUrl: './londres-dedicatorias.component.html',
  styleUrls: ['./londres-dedicatorias.component.css']
})
export class LondresDedicatoriasComponent {

}
