import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroDetailExpandingComponent } from './hero-detail-expanding.component';
import { MyComponent } from './my.component';
import { My2Component } from './my.2.component';
import {MyDirective} from './my.directive'
import { MyIndexDirective } from './my.index.directive';
import { MyReorderingComponent } from './my.reordering.component';
import {MyReorderingService} from './my.repordering.service';
import {DND_PROVIDERS, DND_DIRECTIVES} from 'ng2-dnd';
import { MyCameraComponent } from './my.camera.component';

let h:Hero=new Hero(11,'nice','expanded');
//{ id: 11, name: 'Mr. Nice', expansionState: 'expanded' };

const HEROES: Array<Hero> = [
  new Hero(11,'nice','expanded'),
  new Hero(12,'Narco','expanded'),
  new Hero(13,'Bpmbas','expanded'),
  /*
  { id: 11, name: 'Mr. Nice', expansionState: 'expanded' },
  { id: 12, name: 'Narco' , expansionState: 'expanded'},
  { id: 13, name: 'Bombasto' , expansionState: 'expanded'},
  { id: 14, name: 'Celeritas', expansionState: 'expanded' },
  { id: 15, name: 'Magneta' , expansionState: 'expanded'},
  { id: 16, name: 'RubberMan', expansionState: 'expanded' },
  { id: 17, name: 'Dynama', expansionState: 'expanded' },
  { id: 18, name: 'Dr IQ' , expansionState: 'expanded'},
  { id: 19, name: 'Magma', expansionState: 'expanded' },
  { id: 20, name: 'Tornado' , expansionState:'expanded'}
  */
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
  <my-camera-component></my-camera-component>
  <my-reordering-component></my-reordering-component>
      <my-2-component  [hero]="selectedHero" *myIndex="'3'" index='13'>test</my-2-component>
      <my-2-component *myIndex="'1'" index='11'>test</my-2-component>
      <my-2-component *myIndex="'2'" index='12' >test</my-2-component>
  
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
            <!-- 
            <span class="badge">{{hero.id}}</span> {{hero.name}}
            -->
            <my-hero-detail-expanding [hero]=hero></my-hero-detail-expanding>
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
