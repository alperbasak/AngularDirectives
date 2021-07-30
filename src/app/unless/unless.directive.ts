import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // @Input unless => we want to trigger a method when the value changes
  // so we do it in the setter of this property.

  // Insert a template into the view if condition is false
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  // injecting the dependencies; TemplateRef: what & ViewContainerRef: where
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }

}
