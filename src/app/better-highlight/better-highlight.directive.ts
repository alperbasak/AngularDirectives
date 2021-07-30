import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

// ng g(enerate) (d)irective better-highlight
@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  // 4 making the values to be controllable from outside
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  // it is a better approach to access DOM thru Renderer2 instead ElementRef,
  // as some service workers might not have direct access to DOM
  ngOnInit(): void {
    // 1 instead of setting the style on init, we want to setStyle on some event such as 'mouseover' and 'mouseleave'
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');

    // 4 setting the value of backgroundColor onInit, otherwise first value of bgColor can be wrong: '' vs. hlColor from @Input
    this.backgroundColor = this.defaultColor;
  }

  // 2 HostListener to listen to DOM events
  @HostListener('mouseenter') mouseover(eventData: Event): void {
    // 3 Instead of setStyle from Renderer, bind to the property of the element via HostBinding
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
