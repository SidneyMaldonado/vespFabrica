import { TestBed } from '@angular/core/testing';

import { ViewQuantidadeVendasSetorService } from './view-quantidade-vendas-setor.service';

describe('ViewQuantidadeVendasSetorRepositoryService', () => {
  let service: ViewQuantidadeVendasSetorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewQuantidadeVendasSetorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
