import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/swapi.state';
import { Search } from 'src/app/store/swapi.actions';
import { Item } from 'src/app/models';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  items: Observable<Array<Item>>;
  
  itemClicked(item: Item) {
    this.router.navigate(['/', item.url]);
  }

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit(): void {
    this.store.dispatch(new Search());
    this.items = this.store.select((store) => store.app.searchResult);
  }

}
