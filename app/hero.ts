export class Hero {
  id: number;
  name: string;
  expansionState: string; //'expanded' | 'collapsed'='expanded';

constructor(id: number,
  name: string,
  expansionState: string)
  {
    this.id=id;
    this.name=name;
    this.expansionState=expansionState;
  }

  toggleExpansionState():void {
    this.expansionState == 'expanded'
      ? this.expansionState = 'collapsed'
      : this.expansionState = 'expanded';

  }
}
