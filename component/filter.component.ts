import {Component, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'stn-filter',
  templateUrl: 'filter.component.html',
  styleUrls: ['filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FilterComponent {
  @Input() greeting:string;

  ngOnInit() {
  }

  publicFunction(name) {
    console.log("hello world");
  }
}
