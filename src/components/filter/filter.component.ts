import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'stn-filter',
  templateUrl: 'filter.component.html',
  styleUrls: ['filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {

  @Input() name:string;

  constructor() {}

  getConcatenatedName():string {
    return `My name is ${this.name} and you know it!`
  }

}
