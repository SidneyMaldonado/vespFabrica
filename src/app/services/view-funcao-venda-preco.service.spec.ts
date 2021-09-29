import { TestBed } from '@angular/core/testing';

import { ViewFuncaoVendaPrecoService } from './view-funcao-venda-preco.service';

describe('ViewFuncaoVendaPrecoService', () => {
  let service: ViewFuncaoVendaPrecoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewFuncaoVendaPrecoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
