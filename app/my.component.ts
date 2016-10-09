import { ViewContainerRef,ComponentFactoryResolver ,ViewRef,
  TemplateRef,ContentChild, OnInit, ContentChildren,QueryList,
   ViewChildren,Component, Input } from '@angular/core';
import {My2Component} from './my.2.component'; 
import{MyDirective} from './my.directive'

@Component({
  selector: 'my-component',
  template: `
  <h3>My Component {{index}} {{name}}</h3>
  <div #mm>test</div>
`
})
export class MyComponent implements OnInit  {
constructor(private viewContainer: ViewContainerRef, 
private componentFactoryResolver: ComponentFactoryResolver ){this.index=500;}

@ContentChild(My2Component) child:My2Component;
// @ContentChildren(My2Component,{ read: ViewContainerRef }) contentChildren: QueryList<ViewContainerRef>;
@ContentChildren(My2Component,{ read: ViewContainerRef }) contentChildren: QueryList<TemplateRef<My2Component>>;
@ViewChildren('mm') viewChildren: QueryList<any>;
@ContentChildren(MyDirective) myDirevtiveChildren: QueryList<MyDirective>;


      @Input()
  index: number;

        @Input()
  name: string;

  public ngAfterViewInit(): void
  {
      // this.contentChildren.changes.subscribe(itm=>console.log(JSON.stringify(itm)));
      // this.viewChildren.changes.subscribe(itm=>console.log(JSON.stringify(itm)));
      console.log("vcr length anfter view init:" +ViewContainerRef.length);
      console.log("view children:" +this.viewChildren.length);
  }

  public ngAfterContentInit(): void
  {
    console.log(this.contentChildren.length);
    if (this.child)
    {console.log(this.child.index);}
     this.contentChildren.forEach(
       itm=>{
         console.log("foreach "+itm);
         //console.log("foreach "+JSON.stringify(itm));
      //    ComponentFactoryResolver.    
      //  this.viewContainer.createEmbeddedView(ComponentResolveritm);
      //   this.viewContainer.createComponent(itm)


        let componentFactory = this.componentFactoryResolver.resolveComponentFactory(My2Component);
        var ref=this.viewContainer.createComponent(componentFactory);
ref.instance.index=55;
        ref.changeDetectorRef.detectChanges();

        //this.viewContainer.createEmbeddedView(itm)
        //this.viewContainer.insert(itm);
      }
       
       
       );
       this.contentChildren.changes.subscribe(itm=>console.log("change" +JSON.stringify(itm)));

console.log("myDirevtiveChildren length:" +this.myDirevtiveChildren.length);
       console.log("vcr length:" +ViewContainerRef.length);
      // this.viewChildren.changes.subscribe(itm=>console.log(JSON.stringify(itm)));
  }



  public ngOnInit(): void
  {
      // this.contentChildren.changes.subscribe(itm=>console.log(JSON.stringify(itm)));
      // this.viewChildren.changes.subscribe(itm=>console.log(JSON.stringify(itm)));
  }

}