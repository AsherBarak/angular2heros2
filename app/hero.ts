export class Hero {
  id: number;
  name: string;
  expansionState: 'expanded' | 'collapsed';

  toggleExpansionState() {
    this.expansionState == 'expanded'
      ? this.expansionState = 'collapsed'
      : this.expansionState = 'expanded';

  }
}
