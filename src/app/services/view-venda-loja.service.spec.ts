import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as $ from 'jquery'
import { ViewVendaLojaService } from './view-venda-loja.service';
import { ViewVendaLoja } from '../views/ViewVendaLoja';


describe('view-venda-loja.Service', () => {
  let service: ViewVendaLojaService;
  let viewVendaLojas: ViewVendaLoja[] = []

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports:[HttpClientTestingModule],
      providers:[   ViewVendaLojaService] });
    service = TestBed.inject( ViewVendaLojaService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Teste de Listar do componente com BackEnd', function(doneFn) {
    $.ajax({
  url: 'http://localhost:8080/viewvendaloja',
        dataType: 'json',
        success: function (data:   ViewVendaLojaService[], response: any) {
            expect(data.length).toBeGreaterThanOrEqual(0)
            doneFn();
        },
        error: function( data, response){
          expect( function(){ true; } ).toThrow(new Error("Parsing is not possible"));
        }
    });
  }); 
});
