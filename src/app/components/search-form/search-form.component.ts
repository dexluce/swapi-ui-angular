import { Component, OnInit } from '@angular/core';
import { Filters, SwapiType } from 'src/app/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/swapi.state';
import { Observable } from 'rxjs';
import { FiltersChanged, Search, SearchChanged } from 'src/app/store/swapi.actions';
import { SearchService } from 'src/app/services';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  search: Observable<string>;
  filters: Observable<Filters>;
  _swapiType = SwapiType;

  searchChanged(search: string) {
    this.store.dispatch(new SearchChanged(search));
    this.searchService.search();
  }

  filterChanged(type: SwapiType) {
    this.store.dispatch(new FiltersChanged(type));
    this.searchService.search();
  }

  constructor(
    private store: Store<AppState>,
    private searchService: SearchService,
  ) { }

  ngOnInit(): void {
    this.search = this.store.select(store => store.app.search);
    this.filters = this.store.select(store => store.app.filters);
  }
}
