import { TestBed } from '@angular/core/testing';

import { Bierlexikon } from './bierlexikon';

describe('Bierlexikon', () => {
  let service: Bierlexikon;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Bierlexikon);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
