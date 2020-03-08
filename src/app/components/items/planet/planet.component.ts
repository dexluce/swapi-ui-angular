import { Component, Input } from '@angular/core';
import { Planet } from 'src/app/models';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent {
  @Input() planet: Planet;

  constructor() { }
}
