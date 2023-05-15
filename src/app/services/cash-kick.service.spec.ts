import { TestBed } from '@angular/core/testing';

import { CashKickService } from './cash-kick.service';

describe('Service : CashKickService', () => {
  let service: CashKickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashKickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
