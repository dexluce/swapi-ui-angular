import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/swapi.state';
import { Item } from 'src/app/models';
import { Observable } from 'rxjs';
import { SearchService } from 'src/app/services';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Observable<Array<Item>>;

  constructor(
    private store: Store<AppState>,
    private searchService: SearchService,
  ) { }

  ngOnInit(): void {
    this.searchService.search();
    this.items = this.store.select((store) => store.app.searchResult);
  }
}
