import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-urls-list-to-readable-clickable-items',
  templateUrl: './urls-list-to-readable-clickable-items.component.html',
  styleUrls: ['./urls-list-to-readable-clickable-items.component.css']
})
export class UrlsListToReadableClickableItemsComponent {
  @Input() listOfUrls: Array<string>;

  constructor() { }
}
