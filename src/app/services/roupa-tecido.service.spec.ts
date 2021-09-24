import { TestBed } from '@angular/core/testing';

import { RoupaTecidoService } from './roupa-tecido.service';

describe('RoupaTecidoService', () => {
  let service: RoupaTecidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoupaTecidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
