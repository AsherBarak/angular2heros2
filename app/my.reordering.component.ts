import { AfterContentInit, OnInit, Component, Input,ViewContainerRef } from '@angular/core';
import {MyReorderingService} from './my.repordering.service';

@Component({
  selector: 'my-reordering-component',
  template: `
  <h3>My Reordering Component</h3>
  `
})
export class MyReorderingComponent implements AfterContentInit {
 constructor(private viewContainer: ViewContainerRef,
   private reorderingService:MyReorderingService){}

public ngAfterContentInit():void{


setTimeout(()=>{this.reorderingService.renderContent(this.viewContainer);})
}


}