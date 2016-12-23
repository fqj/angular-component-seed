import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'demo-snippet',
  template: `
    <div class="demo-snippet" #demo>
      <ng-content></ng-content>
      <div class="demo-snippet__transclusion"></div>
    </div>
  `,
  styleUrls: [ './demo-snippet.component.css']
})

export class DemoSnippetComponent {
  @ViewChild('demo') content:any;

  ngAfterViewInit() {
    this.content.nativeElement.children[1].append(this.content.nativeElement.children[0].outerHTML);
  }
}
