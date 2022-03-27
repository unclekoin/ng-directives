import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {
  @Input('appStyle') color: string = 'blue';
  @Input() dStyles: { border?: string; borderRadius?: string, fontWeight?: string; padding?: string };
  @HostBinding('style.fontWeight') elWeight?: string;

  @Input() dClass: string = '';
  @HostBinding('class') elClass?: string;

  constructor(private el: ElementRef, private render: Renderer2) {
    this.dStyles = {};
  }

  @HostListener('click', ['$event.target']) onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter() {
    this.render.setStyle(this.el.nativeElement, 'color', this.color);
    this.elWeight = this.dStyles.fontWeight;
    this.elClass = this.dClass;
    // this.render.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight);
    // this.render.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
    // this.render.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius);
    // this.render.setStyle(this.el.nativeElement, 'padding', this.dStyles.padding);
  }

  @HostListener('mouseleave') onLeave() {
    this.elWeight = 'normal';
    this.elClass = '';
    // this.render.setStyle(this.el.nativeElement, 'color', null);
    // this.render.setStyle(this.el.nativeElement, 'fontWeight', null);
    // this.render.setStyle(this.el.nativeElement, 'border', null);
    // this.render.setStyle(this.el.nativeElement, 'borderRadius', null);
    // this.render.setStyle(this.el.nativeElement, 'padding', null);
  }

}
