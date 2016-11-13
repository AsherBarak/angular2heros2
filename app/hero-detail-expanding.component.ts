import { Component, Input, trigger,state,style,transition,animate } from '@angular/core';
import { Hero } from './hero';


@Component({
  selector: 'my-hero-detail-expanding',
  template: `
  <div *ngIf="hero">
  <div (click)='hero.toggleExpansionState()'>
    <div >{{hero.name}}!!!</div>
    <div [@expansionState]='hero.expansionState'><label>id: </label>{{hero.id}}</div>
    </div>
  </div>
`,
animations:[
  trigger('expansionState',[
    state('expanded', style({
      transform:'scale(0.5,0.5)'
    })),
        state('collapsed', style({
      transform:'scale(1.5,1.5)'
    }))
  ,
  transition('expanded => collapsed',animate('100ms ease-out')),
  transition('collapsed => expanded',animate('100ms ease-in'))
])]

})
export class HeroDetailExpandingComponent {
      @Input()
  hero: Hero;

}
