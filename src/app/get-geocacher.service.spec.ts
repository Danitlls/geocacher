import { TestBed, inject } from '@angular/core/testing';

import { GetGeocacherService } from './get-geocacher.service';

describe('GetGeocacherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetGeocacherService]
    });
  });

  it('should ...', inject([GetGeocacherService], (service: GetGeocacherService) => {
    expect(service).toBeTruthy();
  }));
});
