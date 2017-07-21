import { TestBed, inject } from '@angular/core/testing';

import { SaveGeocacherService } from './save-geocacher.service';

describe('SaveGeocacherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SaveGeocacherService]
    });
  });

  it('should ...', inject([SaveGeocacherService], (service: SaveGeocacherService) => {
    expect(service).toBeTruthy();
  }));
});
