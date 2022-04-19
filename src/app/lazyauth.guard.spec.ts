import { TestBed } from '@angular/core/testing';

import { LazyauthGuard } from './lazyauth.guard';

describe('LazyauthGuard', () => {
  let guard: LazyauthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LazyauthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
