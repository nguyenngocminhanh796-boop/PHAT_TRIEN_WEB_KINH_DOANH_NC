import { TestBed } from '@angular/core/testing';

import { Customerex18Service } from './customerex18-service';

describe('Customerex18Service', () => {
  let service: Customerex18Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Customerex18Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
