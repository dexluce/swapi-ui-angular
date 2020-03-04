import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SwapiState } from 'src/app/store/swapi.state';
import { Search } from 'src/app/store/swapi.actions';

@Component({
  selector: 'app-swapi-list-layout',
  templateUrl: './swapi-list-layout.component.html',
  styleUrls: ['./swapi-list-layout.component.css']
})
export class SwapiListLayoutComponent implements OnInit {

  constructor(private _store: Store<SwapiState>) { }

  ngOnInit(): void {
    this._store.dispatch(new Search());
  }

}
