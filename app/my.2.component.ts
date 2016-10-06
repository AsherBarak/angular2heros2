import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-2-component',
  template: `
  <h3>My 2 Component {{index}}</h3>
  
`

})
export class My2Component {
constructor(){this.index=500;}

      @Input()
  index: number;

}