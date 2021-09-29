import { TestBed } from '@angular/core/testing';

import { ViewQuantidadeTecidoService } from './view-quantidade-tecido.service';

describe('ViewQuantidadeTecidoService', () => {
  let service: ViewQuantidadeTecidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewQuantidadeTecidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
