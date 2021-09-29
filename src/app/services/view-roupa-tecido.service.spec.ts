import { TestBed } from '@angular/core/testing';

import { ViewRoupaTecidoService } from './view-roupa-tecido.service';

describe('ViewRoupaTecidoService', () => {
  let service: ViewRoupaTecidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewRoupaTecidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
