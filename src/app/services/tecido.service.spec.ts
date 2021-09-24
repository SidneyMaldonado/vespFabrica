import { TestBed } from '@angular/core/testing';

import { TecidoService } from './tecido.service';

describe('TecidoService', () => {
  let service: TecidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TecidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
