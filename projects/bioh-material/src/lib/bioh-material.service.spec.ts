import { TestBed, inject } from '@angular/core/testing';

import { BiohMaterialService } from './bioh-material.service';

describe('BiohMaterialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BiohMaterialService]
    });
  });

  it('should be created', inject([BiohMaterialService], (service: BiohMaterialService) => {
    expect(service).toBeTruthy();
  }));
});
