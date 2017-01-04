import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'stn-filter',
  templateUrl: 'filter.component.html',
  styleUrls: ['filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class FilterComponent {
  /**
   * Input / Defines filter icon for right button. SVG recommended
   */
  @Input() filterImg: string;
  /**
   * Input / Defines filter icon for right button. SVG recommended
   */
  @Input() speakImg: string;
  /**
   * Input / Defines filter icon for right button. SVG recommended
   */
  @Input() searchTerm: string;

  /**
   * Output / EventEmitter for search term
   */
  @Output() searchTermUpdated = new EventEmitter();
  /**
   * Output / EventEmitter for filter button clicked
   */
  @Output() filterButtonClicked = new EventEmitter();
  /**
   * Output / EventEmitter for phone button clicked
   */
  @Output() phoneButtonClicked = new EventEmitter();

  constructor() {
    this.filterImg = '/assets/images/filter.svg';
    this.speakImg = '/assets/images/voice.svg';
  }

  /**
   * Send an event on every search term change
   * @param event
   */
  searchTermChanged(event:any) {
    this.searchTerm = event;
    this.searchTermUpdated.emit({
      value: event
    })
  }

  /**
   * Send a custom event if phone or filter buttons are clicked
   * @param event
   * @param type
   */
  sendEvent(event:any, type:string) {
    if(type === 'phone') {
      this.phoneButtonClicked.emit({
        value: this.searchTerm
      })
    }
    else{
      this.filterButtonClicked.emit({
        value: this.searchTerm
      })
    }
  }
}
