import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SwapiState } from 'src/app/store/swapi.state';
import { Search } from 'src/app/store/swapi.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private _store: Store<SwapiState>) { }

  ngOnInit(): void {
    this._store.dispatch(new Search());
  }

}
