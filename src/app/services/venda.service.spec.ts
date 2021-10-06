import { TestBed } from '@angular/core/testing';
import { VendaService } from './venda.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Venda } from '../entities/venda';
import * as $ from 'jquery'

describe('VendaService', () => {
  let service: VendaService;
  let vendas: Venda[]=[];

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports:[HttpClientTestingModule],
      providers: [VendaService] });
    service = TestBed.inject(VendaService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Teste de Listar do componente com BackEnd', function(doneFn) {
    $.ajax({
        url: 'http://localhost:8080/venda/listar',
        dataType: 'json',
        success: function (data: Venda[], response: any) {
            expect(data.length).toBeGreaterThanOrEqual(0)
            doneFn();
        },
        error: function( data, response){
          expect( function(){ true; } ).toThrow(new Error("Parsing is not possible"));
        }
    });
  }); 
});
