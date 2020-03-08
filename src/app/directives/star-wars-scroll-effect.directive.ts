import { Directive, ElementRef, HostListener, Input, Renderer2, AfterViewInit, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStarWarsScrollEffect]'
})
export class StarWarsScrollEffectDirective implements AfterViewInit {
  top = 0;
  rotate = 25;
  translateZ = 100;

  @HostListener("window:wheel", ["$event"]) onScroll(e: WheelEvent) {
    if (e.deltaY > 0) {
      this.top = this.top - 1;
    } else {
      this.top = this.top + 1;
    }
    this.el.nativeElement.style.top = `${this.top}%`;
  }

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private viewContainerRef: ViewContainerRef,  
  ){ }
  
  ngAfterViewInit() {
    const parent = this.el.nativeElement.parentNode;
    const div = this.renderer.createElement("div");
    
    this.renderer.insertBefore(parent, div, this.el.nativeElement);
    this.renderer.removeChild(parent, this.el.nativeElement);
    this.renderer.appendChild(div, this.el.nativeElement)
    
    this.renderer.setStyle(div, "height", "100%");
    this.renderer.setStyle(div, "overflow", "hidden");
    this.renderer.setStyle(div, "marginTop", "-15vh");
    this.renderer.setStyle(div, "transform", "perspective(50vh) rotateX(25deg)");
    this.renderer.setStyle(this.el.nativeElement, "position", "absolute");
    this.renderer.setStyle(this.el.nativeElement, "left", "25%")
    this.renderer.setStyle(this.el.nativeElement, "right", "25%")
  }
}
