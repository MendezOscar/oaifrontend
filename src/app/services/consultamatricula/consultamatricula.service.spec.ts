import { TestBed } from '@angular/core/testing';

import { ConsultamatriculaService } from './consultamatricula.service';

describe('ConsultamatriculaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsultamatriculaService = TestBed.get(ConsultamatriculaService);
    expect(service).toBeTruthy();
  });
});
