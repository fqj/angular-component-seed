import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule} from '@angular/router';
import { ROUTES } from './app.routes';
import { ShellComponent } from './shell';
import { FilterComponent } from '../.';


/** `AppModule` is the main entry point into Angular2's bootstraping process */
@NgModule({
  bootstrap: [ ShellComponent ],
  declarations: [
    ShellComponent,
    FilterComponent
  ],
  /** import Angular's modules and specify the lazyLoad modules preload strategy */
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {
      useHash: true
      // ,preloadingStrategy: PreloadAllModules
    })
  ]
})

export class AppModule {
}
