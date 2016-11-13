import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroDetailExpandingComponent } from './hero-detail-expanding.component';
import { MyComponent } from './my.component';
import { My2Component } from './my.2.component';
import { MyCameraComponent } from './my.camera.component';
import { MyDirective } from './my.directive';
import { MyIndexDirective } from './my.index.directive';
import {DndModule} from 'ng2-dnd';
import { MyReorderingComponent } from './my.reordering.component';
import {MyReorderingService} from './my.repordering.service';

@NgModule({
  imports: [ BrowserModule,
    FormsModule,
    DndModule.forRoot() ],
  declarations: [ AppComponent ,MyIndexDirective,
    HeroDetailComponent,HeroDetailExpandingComponent, MyReorderingComponent,
    MyComponent,My2Component,MyCameraComponent, MyDirective],
  bootstrap: [ AppComponent ],
  entryComponents:[My2Component],
  providers:[MyReorderingService]
})
export class AppModule { }
