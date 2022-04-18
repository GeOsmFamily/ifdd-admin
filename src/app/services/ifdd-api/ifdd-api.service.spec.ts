import { TestBed } from '@angular/core/testing';

import { IfddApiService } from './ifdd-api.service';

describe('IfddApiService', () => {
  let service: IfddApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IfddApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
