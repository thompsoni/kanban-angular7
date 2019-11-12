import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[menuHost]',
})
export class MenuHostDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
