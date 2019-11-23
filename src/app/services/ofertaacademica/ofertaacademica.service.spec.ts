import { TestBed } from '@angular/core/testing';

import { OfertaacademicaService } from './ofertaacademica.service';

describe('OfertaacademicaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfertaacademicaService = TestBed.get(OfertaacademicaService);
    expect(service).toBeTruthy();
  });
});
