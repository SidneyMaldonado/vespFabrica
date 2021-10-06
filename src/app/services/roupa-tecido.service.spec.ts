import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RoupaTecido } from '../entities/roupatecido';
import * as $ from 'jquery'

import { RoupaTecidoService } from './roupa-tecido.service';

describe('RoupaTecidoService', () => {
  let service: RoupaTecidoService;
  let RoupaTecido: RoupaTecido[]=[];

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports:[HttpClientTestingModule],
      providers: [RoupaTecidoService] });
    service = TestBed.inject(RoupaTecidoService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Teste de Listar do componente com BackEnd', function(doneFn) {
    $.ajax({
        url: 'http://localhost:8080/roupatecido/listar',
        dataType: 'json',
        success: function (data: RoupaTecido[], response: any) {
            expect(data.length).toBeGreaterThanOrEqual(0)
            doneFn();
        },
        error: function( data, response){
          expect( function(){ true; } ).toThrow(new Error("Parsing is not possible"));
        }
    });
  }); 
});