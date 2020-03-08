import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Item, Film, People, Vehicle, Planet, Species, Starship } from 'src/app/models';
import { SwapiService } from 'src/app/services';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
})
export class ItemComponent implements OnInit, OnDestroy {
  item: Observable<Item>;
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

  asSwapiType(item: Item): Item {
    switch (item.type) {
      case "films": return (item as Film);
      case "people": return (item as People);
      case "planets": return (item as Planet);
      case "species": return (item as Species);
      case "starships": return (item as Starship);
      case "vehicles": return (item as Vehicle);
      default:
        break;
    }
  }
}
