import { Component, OnInit } from '@angular/core';
import { Filters, SwapiType } from 'src/app/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/swapi.state';
import { Observable } from 'rxjs';
import { FiltersChanged, Search } from 'src/app/store/swapi.actions';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  search: Observable<string>;
  filters: Observable<Filters>;
  _swapiType = SwapiType;

  filterChanged(type: SwapiType) {
    this.store.dispatch(new FiltersChanged(type));
    this.store.dispatch(new Search());
  }

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.search = this.store.select(store => store.app.search);
    this.filters = this.store.select(store => store.app.filters);
  }
}
