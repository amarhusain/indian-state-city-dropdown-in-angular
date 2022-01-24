import { TestBed } from '@angular/core/testing';

import { IndianCityService } from './indian-city.service';

describe('IndianCityService', () => {
  let service: IndianCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndianCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
