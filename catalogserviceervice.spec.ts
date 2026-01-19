import { TestBed } from '@angular/core/testing';

import { Catalogserviceervice } from './catalogserviceervice';

describe('Catalogserviceervice', () => {
  let service: Catalogserviceervice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Catalogserviceervice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
