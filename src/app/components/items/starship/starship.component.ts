import { Component, Input } from '@angular/core';
import { Starship } from 'src/app/models';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent {
  @Input() starship: Starship

  constructor() { }

}
