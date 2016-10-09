import { Injectable ,TemplateRef,ViewContainerRef} from '@angular/core';

@Injectable()
export class MyReorderingService {
    public log(message:string):void
    {
        console.log(message);
    }

    public registerContentElement(templateRef: TemplateRef<any>,
  viewContainer: ViewContainerRef, index:number):void{

  }
}