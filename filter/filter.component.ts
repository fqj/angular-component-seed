import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'stn-filter',
  templateUrl: 'filter.component.html',
  styleUrls: ['filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FilterComponent {

  constructor() {}

  ngOnInit() {
  }
}
