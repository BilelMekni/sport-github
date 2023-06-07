import { TestBed } from '@angular/core/testing';

import { SearchWeatherService } from './search-weather.service';

describe('SearchWeatherService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchWeatherService = TestBed.get(SearchWeatherService);
    expect(service).toBeTruthy();
  });
});
