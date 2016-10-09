import { Component, Input,ViewContainerRef } from '@angular/core';

@Component({
  selector: 'my-component',
  template: `
  <h3>My Component {{index}} {{name}}</h3>
  
`
})
export class MyComponent {
 constructor(private viewContainerRef:ViewContainerRef
 ){}

      @Input()
  index: number;

        @Input()
  name: string;


}