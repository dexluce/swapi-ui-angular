import { Component, OnDestroy, ElementRef, Renderer2, HostListener, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Item, Film, People, Vehicle, Planet, Species, Starship } from 'src/app/models';
import { SwapiService } from 'src/app/services';
import { AnimationBuilder, AnimationMetadata, style, animate } from '@angular/animations';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements AfterViewInit, OnDestroy {
  @ViewChild("container") container: ElementRef;
  @ViewChild("starWarsScroll") starWarsScroll: ElementRef;
  item: Observable<Item>;
  private subscribtionToUrlParam: Subscription;
  private routerSubscription: Subscription;
  private top = 0; // The current offset of the start wars text
  private isPlaying = false; // While we are player the animation we can't allow the user to scroll. This because angular doesn't implement player.setPosition / player.getPosition yet
  private animation: AnimationMetadata[] = [
    style({ top: "75%" }),
    animate(".5s", style({ top: "71%" })),
    animate(".5s", style({ top: "71%" })),
    animate(".5s", style({ top: 0 }))
  ];

  // The max offset, adapted to the size of the text displayed
  get topLimite() {
    if (this.container === undefined || this.starWarsScroll === undefined) return -100;
    // This is something of a magic number. First "89" is not 100 because we are not in full height. And we want a few lines to be kept in screen
    // plus iscompensate the "perspective" css off 100px. 
    // Second, "0.90630791931" is there because of the rotation of 25deg on X. Would be 1 is no rotation
    else return -(this.starWarsScroll.nativeElement.offsetHeight * 89) / (this.container.nativeElement.offsetHeight * 0.90630791931);
  }

  @HostListener("window:wheel", ["$event"]) onScroll(e: WheelEvent) {
    if (this.isPlaying || this.starWarsScroll === undefined) return;
    if (e.deltaY > 0) {
      if (this.top !> this.topLimite) this.top = this.top - 1;
    } else {
      if (this.top !< 71) this.top = this.top + 1;
    }
    this.renderer.setStyle(this.starWarsScroll.nativeElement, "top", `${this.top}%`)
  }

  constructor(
    private route: ActivatedRoute,
    private swapiService: SwapiService,
    private renderer: Renderer2,
    private builder: AnimationBuilder,
    private router: Router
  ) {
    this.subscribtionToUrlParam = this.route.params.subscribe((params) => {
      const itemUrl = this.swapiService.buildUrlFromTypeAndId(params["type"], params["id"]);
      this.item = this.swapiService.getItemByUrl(itemUrl);

      this.routerSubscription = this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.ngAfterViewInit();
        }
      });
    });
  }

  ngAfterViewInit() {
    if (this.starWarsScroll === undefined) return;
    this.top = 0;
    const factory = this.builder.build(this.animation);
    const player = factory.create(this.starWarsScroll.nativeElement);
    this.isPlaying = true;
    player.play();
    player.onDone(() => {
      this.isPlaying = false;
      player.destroy();
      this.renderer.setStyle(this.starWarsScroll.nativeElement, "top", "0%")
    })
  }

  ngOnDestroy() {
    this.subscribtionToUrlParam.unsubscribe();
    this.routerSubscription.unsubscribe();
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
