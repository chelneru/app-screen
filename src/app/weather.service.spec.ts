import { TestBed } from '@angular/core/testing';

import { WeatherService } from './weather.service';
import {HttpClientModule} from '@angular/common/http';
describe('WeatherService', () => {
  let service: WeatherService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [WeatherService]
    });
    service = TestBed.inject(WeatherService);
  });
  it('should be created', () => {
    // const service: WeatherService = TestBed.inject(WeatherNewService);
    expect(service).toBeTruthy();
  });
});
