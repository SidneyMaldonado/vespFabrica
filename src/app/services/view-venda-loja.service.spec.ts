import { TestBed } from '@angular/core/testing';

import { ViewVendaLojaService } from './view-venda-loja.service';

describe('ViewVendaLojaService', () => {
  let service: ViewVendaLojaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewVendaLojaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
