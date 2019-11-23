import { TestBed } from '@angular/core/testing';

import { OfertaacademicadetalleService } from './ofertaacademicadetalle.service';

describe('OfertaacademicadetalleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfertaacademicadetalleService = TestBed.get(OfertaacademicadetalleService);
    expect(service).toBeTruthy();
  });
});
