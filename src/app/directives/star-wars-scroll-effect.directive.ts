import { Directive, ElementRef, HostListener, Input, Renderer2, AfterViewInit } from '@angular/core';
import { style, animate, AnimationPlayer, AnimationBuilder, AnimationMetadata } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';

@Directive({
  selector: '[appStarWarsScrollEffect]'
})
export class StarWarsScrollEffectDirective implements AfterViewInit {
  private top = 0; // The current offset of the start wars text
  private topLimite = 0; // The max offset, adapted to the size of the text displayed
  private player: AnimationPlayer; // Player ressponsible of animating the text on load.
  private isPlaying = true; // While we are player the animation we can't allow the user to scroll. This because angular doesn't implement player.setPosition / player.getPosition yet
  private animation: AnimationMetadata[] = [
    style({ top: '95%' }),
    animate('8s linear', style({ top: 0 })),
  ];

  @HostListener("window:wheel", ["$event"]) onScroll(e: WheelEvent) {
    if (this.isPlaying) return;

    if (e.deltaY > 0) {
      if (this.top !> this.topLimite) this.top = this.top - 1;
    } else {
      if (this.top !< 100) this.top = this.top + 1;
    }

    this.renderer.setStyle(this.el.nativeElement, "top", `${this.top}%`)
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private builder: AnimationBuilder,
    private snackBarService: MatSnackBar
  ){ }
  
  ngAfterViewInit() {
    this.snackBarService.open("wait ...", null, { duration: 1000 })

    const parent = this.el.nativeElement.parentNode;
    const div = this.renderer.createElement("div");
    
    this.renderer.insertBefore(parent, div, this.el.nativeElement);
    this.renderer.removeChild(parent, this.el.nativeElement);
    this.renderer.appendChild(div, this.el.nativeElement)
    
    this.renderer.setStyle(div, "height", "100%");
    this.renderer.setStyle(div, "overflow", "hidden");
    this.renderer.setStyle(div, "marginTop", "-250px");
    this.renderer.setStyle(div, "transform", "perspective(100px) rotateX(25deg)");
    this.renderer.setStyle(this.el.nativeElement, "position", "absolute");
    this.renderer.setStyle(this.el.nativeElement, "left", "35%");
    this.renderer.setStyle(this.el.nativeElement, "right", "35%");
    
    this.topLimite = -(100 / div.offsetHeight * this.el.nativeElement.offsetHeight) 

    const factory = this.builder.build(this.animation);
    this.player = factory.create(this.el.nativeElement);
    this.player.play();
    this.player.onDone(() => {
      this.isPlaying = false;
      this.player.destroy();
      this.snackBarService.open("You can scroll this view now. Enjoy :)", null, { duration: 5000 })
    })
  }
}
