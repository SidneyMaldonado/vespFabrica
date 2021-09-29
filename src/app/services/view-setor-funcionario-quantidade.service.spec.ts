import { TestBed } from '@angular/core/testing';

import { ViewSetorFuncionarioQuantidadeService } from './view-setor-funcionario-quantidade.service';

describe('ViewSetorFuncionarioQuantidadeService', () => {
  let service: ViewSetorFuncionarioQuantidadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewSetorFuncionarioQuantidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
