import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  // adding 'private' to the property in the constructor automatically adds that field to the class as well
  constructor(private elementRef: ElementRef) {
    // instead of doing some stuff in the constructor, better is to do with hooks -> OnInit
  }

  // when initialized style this element's bgColor
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }

}
