import { TestBed } from '@angular/core/testing';

import { AUthGuardService } from './auth-guard.service';

describe('AUthGuardService', () => {
  let service: AUthGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AUthGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
