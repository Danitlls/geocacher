import { TestBed, inject } from '@angular/core/testing';

import { GeocacherApiService } from './geocacher-api.service';

describe('GeocacherApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeocacherApiService]
    });
  });

  it('should ...', inject([GeocacherApiService], (service: GeocacherApiService) => {
    expect(service).toBeTruthy();
  }));
});
