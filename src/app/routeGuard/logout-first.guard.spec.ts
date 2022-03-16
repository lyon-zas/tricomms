import { TestBed } from '@angular/core/testing';

import { LogoutFirstGuard } from './logout-first.guard';

describe('LogoutFirstGuard', () => {
  let guard: LogoutFirstGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LogoutFirstGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
