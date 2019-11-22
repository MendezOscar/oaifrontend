import { TestBed } from '@angular/core/testing';

import { CoordinadorService } from './coordinador.service';

describe('CoordinadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoordinadorService = TestBed.get(CoordinadorService);
    expect(service).toBeTruthy();
  });
});
