import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { MyComponent } from './my.component';
import { My2Component } from './my.2.component';
import { MyDirective } from './my.directive';
import {DndModule} from 'ng2-dnd';

@NgModule({
  imports: [ BrowserModule,
    FormsModule,
    DndModule.forRoot() ],
  declarations: [ AppComponent ,
    HeroDetailComponent,
    MyComponent,My2Component, MyDirective],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
