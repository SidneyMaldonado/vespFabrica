import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { funcao } from '../entities/funcao';
import { FuncaoService } from './funcao.service';
import * as $ from 'jquery'

describe('FuncaoService', () => {
  let service: FuncaoService;
  let funcoes: funcao[]=[];

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports:[HttpClientTestingModule],
      providers: [FuncaoService] });
    service = TestBed.inject(FuncaoService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Teste de Listar do componente com BackEnd', function(doneFn) {
    $.ajax({
        url: 'http://localhost:8080/funcao/listar',
        dataType: 'json',
        success: function (data: funcao[], response: any) {
            expect(data.length).toBeGreaterThanOrEqual(0)
            doneFn();
        },
        error: function( data, response){
          expect( function(){ true; } ).toThrow(new Error("Parsing is not possible"));
        }
    });
  }); 
});
