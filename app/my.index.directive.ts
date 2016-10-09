import { Directive, Input, TemplateRef,ViewContainerRef } from '@angular/core';
import {MyReorderingService} from './my.repordering.service';
@Directive({selector:"[myIndex]",providers:[MyReorderingService]},)

export class MyIndexDirective
{
constructor(
  private templateRef: TemplateRef<any>,
  private viewContainer: ViewContainerRef,
  private reorderingService:MyReorderingService,
  
  ) {


   }

   @Input()
   set myIndex(input:number){
       this.reorderingService.log("scv "+input);

       //this.viewContainer.createEmbeddedView(this.templateRef);
   }
}