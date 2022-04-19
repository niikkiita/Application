import { TestBed } from '@angular/core/testing';

import { TermsGuard } from './terms.guard';

describe('TermsGuard', () => {
  let guard: TermsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(TermsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
