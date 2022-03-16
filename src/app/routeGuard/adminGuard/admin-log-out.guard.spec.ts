import { TestBed } from '@angular/core/testing';

import { AdminLogOutGuard } from './admin-log-out.guard';

describe('AdminLogOutGuard', () => {
  let guard: AdminLogOutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AdminLogOutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
