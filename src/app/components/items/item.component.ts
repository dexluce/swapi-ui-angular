import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Item, Film } from 'src/app/models';
import { SwapiService } from 'src/app/services';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent implements OnInit, OnDestroy {
  item: Observable<Item>;
  // this because the array returned for "people" in a item is named "characters"
  // We should do another type for this but... overkill.
  private subscribtionToUrlParam: Subscription;

  constructor(
    private route: ActivatedRoute,
    private swapiService: SwapiService,
  ) { }

  ngOnInit() {
    this.subscribtionToUrlParam = this.route.params.subscribe((params) => {
      const itemUrl = this.swapiService.buildUrlFromTypeAndId(params["type"], params["id"]);
      this.item = this.swapiService.getItemByUrl(itemUrl);
    });
  }

  ngOnDestroy() {
    this.subscribtionToUrlParam.unsubscribe();
  }

  asFilm(item: Item): Film {
    return (item as Film);
  }
}
