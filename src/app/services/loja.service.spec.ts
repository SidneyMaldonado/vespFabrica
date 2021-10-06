import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Loja } from '../entities/loja';
import * as $ from 'jquery'

import { LojaService } from './loja.service';

describe('LojaService', () => {
  let service: LojaService;
  let lojas: Loja[]=[];

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports:[HttpClientTestingModule],
      providers: [LojaService] });
    service = TestBed.inject(LojaService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Teste de Listar do componente com BackEnd', function(doneFn) {
    $.ajax({
        url: 'http://localhost:8080/loja/listar',
        dataType: 'json',
        success: function (data: Loja[], response: any) {
            expect(data.length).toBeGreaterThanOrEqual(0)
            doneFn();
        },
        error: function( data, response){
          expect( function(){ true; } ).toThrow(new Error("Parsing is not possible"));
        }
    });
  }); 
});