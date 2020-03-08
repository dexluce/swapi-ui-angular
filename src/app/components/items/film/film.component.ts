import { Component, OnInit, Input } from '@angular/core';
import { Film } from 'src/app/models';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.css']
})
export class FilmComponent {
  @Input() film: Film;
}
