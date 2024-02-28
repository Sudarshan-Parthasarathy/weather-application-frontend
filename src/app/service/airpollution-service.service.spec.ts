import { TestBed } from '@angular/core/testing';

import { AirpollutionService } from './airpollution-service.service';

describe('AirpollutionServiceService', () => {
  let service: AirpollutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AirpollutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
