import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/swapi.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  isLoading: Observable<boolean>;

  constructor(private store: Store<AppState>) { }

  async ngOnInit(): Promise<void> {
    this.isLoading = this.store.select(store => store.app.loading);
  }
}
