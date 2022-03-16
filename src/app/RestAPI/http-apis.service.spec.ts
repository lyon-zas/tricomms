import { TestBed } from '@angular/core/testing';

import { HttpAPIsService } from './http-apis.service';

describe('HttpAPIsService', () => {
  let service: HttpAPIsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpAPIsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
