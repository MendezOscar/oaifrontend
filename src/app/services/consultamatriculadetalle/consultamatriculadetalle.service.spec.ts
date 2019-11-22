import { TestBed } from '@angular/core/testing';

import { ConsultamatriculadetalleService } from './consultamatriculadetalle.service';

describe('ConsultamatriculadetalleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultamatriculadetalleService = TestBed.get(ConsultamatriculadetalleService);
    expect(service).toBeTruthy();
  });
});
