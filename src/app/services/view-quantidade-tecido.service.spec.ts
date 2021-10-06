import { TestBed } from '@angular/core/testing';
import { ViewQuantidadeTecidoService } from './view-quantidade-tecido.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as $ from 'jquery'
import { ViewQuantidadeTecido } from '../views/ViewQuantidadeTecido';


describe('view-quantidade-tecido.Service', () => {
  let service: ViewQuantidadeTecidoService;
  let viewQuantidadeTecidos: ViewQuantidadeTecido[] = []

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports:[HttpClientTestingModule],
      providers: [ViewQuantidadeTecidoService] });
    service = TestBed.inject(ViewQuantidadeTecidoService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Teste de Listar do componente com BackEnd', function(doneFn) {
    $.ajax({
        url: 'http://localhost:8080/viewquantidadetecido',
        dataType: 'json',
        success: function (data:ViewQuantidadeTecidoService[], response: any) {
            expect(data.length).toBeGreaterThanOrEqual(0)
            doneFn();
        },
        error: function( data, response){
          expect( function(){ true; } ).toThrow(new Error("Parsing is not possible"));
        }
    });
  }); 
});

