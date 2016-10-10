import { AfterViewInit, Component, Input,ViewContainerRef } from '@angular/core';
import {MyReorderingService} from './my.repordering.service';

@Component({
  selector: 'my-reordering-component',
  template: `
  <h3>My Reordering Component</h3>
  `
})
export class MyReorderingComponent implements AfterViewInit {
 constructor(private viewContainer: ViewContainerRef,
   private reorderingService:MyReorderingService){}

public ngAfterViewInit():void{

this.reorderingService.renderContent(this.viewContainer);

}


}