import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { MyComponent } from './my.component';
import { My2Component } from './my.2.component';
import {MyDirective} from './my.directive'

import {DND_PROVIDERS, DND_DIRECTIVES} from 'ng2-dnd';

const HEROES: Array<Hero> = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];


@Component({
    selector: 'my-app',
      //directives: [DND_DIRECTIVES],
  providers: [DND_PROVIDERS],
template:`
  <style>
.dnd-drag-start {
    -moz-transform:scale(0.8);
    -webkit-transform:scale(0.8);
    transform:scale(0.8);
    opacity:0.7;
    border: 2px dashed #000;
}

.dnd-drag-enter {
    opacity:0.7;
    border: 2px dashed #000;
}

.dnd-drag-over {
    border: 2px dashed #000;
}

.dnd-sortable-drag {
  -moz-transform:scale(0.9);
  -webkit-transform:scale(0.9);
  transform:scale(0.9);
  opacity:0.7;
  border: 1px dashed #000;
}
  </style>  

  <h1>{{title}}</h1>

    <my-2-component *myDir='hello_12' index='12'>test</my-2-component>
    <my-2-component *myDir='hello_13' index='13'>test</my-2-component>
    <my-2-component *myDir='hello_14' index='14'>test</my-2-component>

    <my-component name="content">
        <my-2-component index='22'>test</my-2-component>
        <my-2-component index='33'>test</my-2-component>
        <my-2-component index='44'>test</my-2-component>
        <div>content</div>
    </my-component>

  <ul class="list-group" dnd-sortable-container [sortableData]="indecies">
      <li *ngFor="let hero of heroes; let i = index" class="list-group-item" dnd-sortable [sortableIndex]="i">
      <my-component [name]="hero.name">
        <div>content</div>
      </my-component>
      </li>
  </ul>
  <ul >
      <li *ngFor="let ind of indecies">
      {{ind}}
      </li>
  </ul>

  <ul class="list-group"  dnd-sortable-container  [sortableData]="indecies">
    <li   class="list-group-item"  dnd-sortable [sortableIndex]="0">
      <my-component *myDir='hello'></my-component>
    </li>
    <li  class="list-group-item"  dnd-sortable [sortableIndex]="1">
      <my-2-component *myDir='hello2' ></my-2-component>
    </li>
  </ul>

  <h2>My Heroes</h2>
    <ul class="heroes">
        <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
            <span class="badge">{{hero.id}}</span> {{hero.name}}
        </li>
    </ul>
    <my-hero-detail [hero]="selectedHero"></my-hero-detail>


  `,
styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .heroes li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .heroes .text {
    position: relative;
    top: -3px;
  }
  .heroes .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]

})
export class AppComponent { 
    title = 'Tour of Heroes';
selectedHero: Hero;

    heroes = HEROES;
    indecies : Array<number>=[1,2,3,4,5,6,7,8,9,10];

onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

 
    }
