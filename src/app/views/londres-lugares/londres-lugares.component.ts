import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LondresHeaderComponent } from 'src/app/shared/londres-header/londres-header.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';

@Component({
  selector: 'app-londres-lugares',
  standalone: true,
  imports: [LondresHeaderComponent, FooterComponent],
  templateUrl: './londres-lugares.component.html',
  styleUrls: ['./londres-lugares.component.css']
})
export class LondresLugaresComponent {

}
