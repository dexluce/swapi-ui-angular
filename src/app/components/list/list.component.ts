import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SwapiState } from 'src/app/store/swapi.state';
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
  testItem = [{type: '1'}, {type: "2"}];
  
  constructor(private store: Store<SwapiState>) { }

  ngOnInit(): void {
    this.store.dispatch(new Search());
    this.items = this.store.select((store) => store.app.searchResult);

    this.items.subscribe(_items => {
      console.log(_items)
    })
  }

}
