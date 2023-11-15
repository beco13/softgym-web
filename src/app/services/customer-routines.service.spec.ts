import { TestBed } from '@angular/core/testing';

import { CustomerRoutinesService } from './customer-routines.service';

describe('CustomerRoutinesService', () => {
  let service: CustomerRoutinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerRoutinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
