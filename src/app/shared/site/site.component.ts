import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [],
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent {
  @Input() titulo: string = '';
  @Input() bandera: string = '';
  @Input() imagen: string = '';
}
