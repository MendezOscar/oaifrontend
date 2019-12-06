import { TestBed } from '@angular/core/testing';

import { OfertageneradaService } from './ofertagenerada.service';

describe('OfertageneradaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfertageneradaService = TestBed.get(OfertageneradaService);
    expect(service).toBeTruthy();
  });
});
