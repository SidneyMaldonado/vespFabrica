import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as $ from 'jquery'
import { ViewRoupaTecidoService } from './view-roupa-tecido.service';
import { ViewRoupaTecido } from '../views/ViewRoupaTecido';

describe('view-roupa-tecido.Service', () => {
  let service: ViewRoupaTecidoService;
  let viewRoupaTecido: ViewRoupaTecido[] = []

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports:[HttpClientTestingModule],
      providers:[  ViewRoupaTecidoService] });
    service = TestBed.inject( ViewRoupaTecidoService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Teste de Listar do componente com BackEnd', function(doneFn) {
    $.ajax({
  url: 'http://localhost:8080/viewRoupaTecido',
        dataType: 'json',
        success: function (data:  ViewRoupaTecidoService[], response: any) {
            expect(data.length).toBeGreaterThanOrEqual(0)
            doneFn();
        },
        error: function( data, response){
          expect( function(){ true; } ).toThrow(new Error("Parsing is not possible"));
        }
    });
  }); 
});
