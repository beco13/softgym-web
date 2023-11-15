import { TestBed } from '@angular/core/testing';

import { CollectFundsService } from './collect-funds.service';

describe('CollectFundsService', () => {
  let service: CollectFundsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollectFundsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
