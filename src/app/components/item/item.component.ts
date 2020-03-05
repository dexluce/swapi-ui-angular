import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Item } from 'src/app/models';
import { SwapiService } from 'src/app/services';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy {
  url: string;
  item: Observable<Item>;
  private subscribtionToUrlParam: Subscription;

  constructor(
    private route: ActivatedRoute,
    private swapiService: SwapiService,
  ) { }

  ngOnInit() {
    this.subscribtionToUrlParam = this.route.params.subscribe((params) => {
      this.url = params['itemUrl'];
      this.item = this.swapiService.getItemByUrl(this.url);
    });
  }

  ngOnDestroy() {
    this.subscribtionToUrlParam.unsubscribe();
  }

}
