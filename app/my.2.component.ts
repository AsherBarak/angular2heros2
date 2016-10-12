import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'my-2-component',
  template: `
  <h3>My 2 Component {{index}}</h3>
    <div *ngIf="hero">
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name"/>
    </div>
  </div>
`

})
export class My2Component {
constructor(){//this.index=500;
  }

      @Input()
  index: number;
        @Input()
  hero: Hero;

}