import { TestBed } from '@angular/core/testing';

import { BierlexikonService } from './bierlexikon';

describe('Bierlexikon', () => {
  let service: BierlexikonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BierlexikonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
