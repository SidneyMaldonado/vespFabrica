import { TestBed } from '@angular/core/testing';
import { ViewFuncaoVendaPrecoService } from './view-funcao-venda-preco.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as $ from 'jquery'
import { ViewFuncaoVendaPreco } from '../views/ViewFuncaoVendaPreco';

describe('view-funcao-venda-preco.Service', () => {
  let service: ViewFuncaoVendaPrecoService;
  let viewFuncaoVendaPrecos: ViewFuncaoVendaPreco[] = []

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports:[HttpClientTestingModule],
      providers: [ViewFuncaoVendaPrecoService] });
    service = TestBed.inject(ViewFuncaoVendaPrecoService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Teste de Listar do componente com BackEnd', function(doneFn) {
    $.ajax({
  url: 'http://localhost:8080/viewfuncaovendapreco',
        dataType: 'json',
        success: function (data: ViewFuncaoVendaPrecoService[], response: any) {
            expect(data.length).toBeGreaterThanOrEqual(0)
            doneFn();
        },
        error: function( data, response){
          expect( function(){ true; } ).toThrow(new Error("Parsing is not possible"));
        }
    });
  }); 
});
