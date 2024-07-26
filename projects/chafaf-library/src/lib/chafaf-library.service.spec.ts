import { TestBed } from '@angular/core/testing';

import { ChafafLibraryService } from './chafaf-library.service';

describe('ChafafLibraryService', () => {
  let service: ChafafLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChafafLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
