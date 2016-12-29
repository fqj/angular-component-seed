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

  it('verify name', inject([ FilterComponent ], (myEl: FilterComponent) => {

    myEl.name = 'Julio Iglesias'
    expect(myEl.getConcatenatedName()).toBe('My name is Julio Iglesias and you know it!');

  }));

});
