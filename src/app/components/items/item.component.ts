import { Component, OnDestroy, ElementRef, Renderer2, HostListener, ViewChild, AfterViewInit, ViewChildren } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Item, Film, People, Vehicle, Planet, Species, Starship } from 'src/app/models';
import { SwapiService } from 'src/app/services';
import { AnimationBuilder, AnimationPlayer, AnimationMetadata, style, animate } from '@angular/animations';

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
  private topLimite = 0; // The max offset, adapted to the size of the text displayed
  private isPlaying = true; // While we are player the animation we can't allow the user to scroll. This because angular doesn't implement player.setPosition / player.getPosition yet
  private animation: AnimationMetadata[] = [
    style({ top: '95%' }),
    animate('5s linear', style({ top: 0 }))
  ];

  @HostListener("window:wheel", ["$event"]) onScroll(e: WheelEvent) {
    if (this.isPlaying) return;

    if (e.deltaY > 0) {
      if (this.top !> this.topLimite) this.top = this.top - 1;
    } else {
      if (this.top !< 100) this.top = this.top + 1;
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

      this.item.subscribe(() => {
        if (this.container === undefined || this.starWarsScroll === undefined) return;
        console.log(this.container.nativeElement.offsetHeight, this.starWarsScroll.nativeElement.offsetHeight)

        this.topLimite = -(150 / this.starWarsScroll.nativeElement.offsetHeight * this.starWarsScroll.nativeElement.offsetHeight) 

      })
    });
  }

  ngAfterViewInit() {
    if (this.container === undefined || this.starWarsScroll === undefined) return;
    this.top = 0;
    this.isPlaying = true;
    
    const factory = this.builder.build(this.animation);
    const player = factory.create(this.starWarsScroll.nativeElement);
    player.play();
    player.onDone(() => {
      this.isPlaying = false;
      player.destroy();
    })
    console.log("ici")
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
