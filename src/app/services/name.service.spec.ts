import { TestBed } from '@angular/core/testing';

import { NameService } from './name.service';

describe('Service NameService', () => {
  let service: NameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
