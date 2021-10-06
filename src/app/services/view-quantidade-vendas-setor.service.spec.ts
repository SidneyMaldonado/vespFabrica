import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as $ from 'jquery'
import { ViewQuantidadeVendasSetorService } from './view-quantidade-vendas-setor.service';
import { ViewQuantidadeVendasSetor } from '../views/ViewQuantidadeVendasSetor';

describe('view-quantidade-vendas-setor.Service', () => {
  let service: ViewQuantidadeVendasSetorService;
  let viewQuantidadeVendasSetor: ViewQuantidadeVendasSetor[] = []

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports:[HttpClientTestingModule],
      providers:[ ViewQuantidadeVendasSetorService] });
    service = TestBed.inject(ViewQuantidadeVendasSetorService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Teste de Listar do componente com BackEnd', function(doneFn) {
    $.ajax({
  url: 'http://localhost:8080/viewquantidadevendassetor',
        dataType: 'json',
        success: function (data: ViewQuantidadeVendasSetorService[], response: any) {
            expect(data.length).toBeGreaterThanOrEqual(0)
            doneFn();
        },
        error: function( data, response){
          expect( function(){ true; } ).toThrow(new Error("Parsing is not possible"));
        }
    });
  }); 
});
