import { Directive, Input, TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({selector:"[myIndex]"})

export class MyIndexDirective
{
constructor(
  private templateRef: TemplateRef<any>,
  private viewContainer: ViewContainerRef
  ) {


   }

   @Input()
   set myIndex(input:number){
       console.log(input);
       //this.viewContainer.createEmbeddedView(this.templateRef);
   }
}