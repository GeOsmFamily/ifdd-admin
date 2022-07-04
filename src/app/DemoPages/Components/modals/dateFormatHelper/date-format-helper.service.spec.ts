import { TestBed } from '@angular/core/testing';

import { DateFormatHelperService } from './date-format-helper.service';

describe('DateFormatHelperService', () => {
  let service: DateFormatHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateFormatHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
