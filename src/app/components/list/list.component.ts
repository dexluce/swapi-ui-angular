import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/swapi.state';
import { Search } from 'src/app/store/swapi.actions';
import { Item } from 'src/app/models';
import { Observable } from 'rxjs';
import { selectSearchResult } from 'src/app/store/swapi.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Observable<Array<Item>>;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.dispatch(new Search());
    this.items = this.store.select((store) => store.app.searchResult);
  }

}
