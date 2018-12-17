import { TestBed } from '@angular/core/testing';

import { AdzBookService } from './adz-book.service';

describe('AdzBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdzBookService = TestBed.get(AdzBookService);
    expect(service).toBeTruthy();
  });
});
