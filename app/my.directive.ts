import { Directive, Input, TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({selector:"[myDir]"})

export class MyDirective
{
constructor(
  private templateRef: TemplateRef<any>,
  private viewContainer: ViewContainerRef
  ) {


   }

   @Input()
   set myDir(input:any){
       console.log(input);
       this.viewContainer.createEmbeddedView(this.templateRef);
   }
}