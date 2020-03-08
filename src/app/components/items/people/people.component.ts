import { Component, Input } from '@angular/core';
import { People } from 'src/app/models';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() people: People;
  
  constructor() { }

}
