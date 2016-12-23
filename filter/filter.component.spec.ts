import {
  inject,
  TestBed
} from '@angular/core/testing';

// Load the implementations that should be tested
import {FilterComponent} from "./filter.component";

describe('Filter Component', () => {
  // provide our implementations or mock-data to the dependency injector
  beforeEach(() => TestBed.configureTestingModule(
    {
      providers: [FilterComponent]
    }
  ));

  it('should work!', inject([ FilterComponent ], (myEl: FilterComponent) => {
    expect(myEl.url).toEqual('https://twitter.com/AngularClass');
  }));

});
