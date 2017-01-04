import { NgModule } from '@angular/core';
import {RouterModule, Routes, Router, NavigationEnd} from "@angular/router";
import { BrowserModule } from '@angular/platform-browser';
import { ROUTES } from './app.routes';
import { FormsModule }   from '@angular/forms';
import { DemoComponent } from './demo.component';
import { ShellComponent } from './shell';
import { DemoSnippetComponent } from "./demo-snippet/demo-snippet.component";
import { FilterComponent } from '../components/filter/filter.component';
import { DocIframeComponent } from "./doc-iframe/doc-iframe.component";
import { TestsIframeComponent } from "./tests-iframe/tests-iframe.component";

/** `AppModule` is the main entry point into Angular2's bootstraping process */
@NgModule({
  bootstrap: [ ShellComponent ],
  declarations: [
    ShellComponent,
    FilterComponent,
    DemoSnippetComponent,
    DocIframeComponent,
    TestsIframeComponent,
    DemoComponent
  ],
  /** import Angular's modules and specify the lazyLoad modules preload strategy */
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ]
})

export class AppModule {
  constructor(private router: Router) {
     router.events.subscribe((navigationEvent) => {
      if (navigationEvent instanceof NavigationEnd && navigationEvent.url.indexOf('demo') != -1) {
        window.prettyPrint();
      }
    });
  }
}
