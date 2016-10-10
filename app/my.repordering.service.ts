import { Injectable ,TemplateRef,ViewContainerRef} from '@angular/core';

@Injectable()
export class MyReorderingService {

    constructor()
    {
        console.log('serive created');
    }

    private store:Array<{index:number,template:TemplateRef<any>,viewContainer:ViewContainerRef}>=new Array();

    public log(message:string):void
    {
        console.log(message);
    }

    public registerContentElement(templateRef: TemplateRef<any>,
        viewContainer: ViewContainerRef, index:number):void{
            this.store.push({index:index,template:templateRef,viewContainer:viewContainer});
    }

  public renderContent(viewContainer: ViewContainerRef)
  {
      console.log("presenting "+this.store.length);
      this.store.sort((a,b)=>a.index-b.index).forEach(el=>{
            console.log(el.index);
            let createdView=viewContainer.createEmbeddedView(el.template);
            
            //el.viewContainer.createEmbeddedView(el.template,null,el.index);
            //el.viewContainer.insert
        }
      );
  }
}