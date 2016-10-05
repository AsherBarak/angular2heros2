import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-component',
  template: `
  <h3>My Component {{index}}</h3>
  
`

})
export class MyComponent {
constructor(){this.index=500;}

      @Input()
  index: number;

}