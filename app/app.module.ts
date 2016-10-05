import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { MyComponent } from './my.component';
import { MyDirective } from './my.directive';


@NgModule({
  imports: [ BrowserModule,
    FormsModule ],
  declarations: [ AppComponent ,
    HeroDetailComponent,
    MyComponent, MyDirective],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
