import { TestBed } from '@angular/core/testing';

import { AuthLoginService } from './authlogin.service';

describe('AuthloginService', () => {
  let service: AuthLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
