import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from './demo.component';
import { ShellComponent } from './shell';
import {FilterComponent} from "../../component";
import {DemoSnippetComponent} from "./demo-snippet/demo-snippet.component";
import {RouterModule, Routes} from "@angular/router";
import {DocIframeComponent} from "./doc-iframe/doc-iframe.component";


const ROUTES: Routes = [
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'docs',
    component: DocIframeComponent
  },
  {
    path: '',
    redirectTo: 'demo',
    pathMatch: 'full'
  }
];


/** `AppModule` is the main entry point into Angular2's bootstraping process */
@NgModule({
  bootstrap: [ ShellComponent ],
  declarations: [
    ShellComponent,
    FilterComponent,
    DemoSnippetComponent,
    DocIframeComponent,
    DemoComponent
  ],
  /** import Angular's modules and specify the lazyLoad modules preload strategy */
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ]
})

export class AppModule {
}
