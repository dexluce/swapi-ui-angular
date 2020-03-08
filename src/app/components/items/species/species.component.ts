import { Component, Input } from '@angular/core';
import { Species } from 'src/app/models';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent {
  @Input() species: Species;
  
  constructor() { }

}
