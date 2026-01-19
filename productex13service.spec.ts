import { TestBed } from '@angular/core/testing';

import { Productex13service } from './productex13service';

describe('Productex13service', () => {
  let service: Productex13service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Productex13service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
