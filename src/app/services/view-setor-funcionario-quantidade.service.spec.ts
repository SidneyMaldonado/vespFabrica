import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as $ from 'jquery'
import { ViewSetorFuncionarioQuantidadeService } from './view-setor-funcionario-quantidade.service';
import { ViewSetorFuncionarioQuantidade } from '../views/viewsetorfuncionarioquantidade';

describe('view-setor-funcionario-quantidade.Service', () => {
  let service: ViewSetorFuncionarioQuantidadeService;
  let viewSetorFuncionarioQuantidades: ViewSetorFuncionarioQuantidade[] = []

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports:[HttpClientTestingModule],
      providers:[  ViewSetorFuncionarioQuantidadeService] });
    service = TestBed.inject( ViewSetorFuncionarioQuantidadeService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Teste de Listar do componente com BackEnd', function(doneFn) {
    $.ajax({
  url: 'http://localhost:8080/viewsetorfuncionarioquantidade',
        dataType: 'json',
        success: function (data:  ViewSetorFuncionarioQuantidadeService[], response: any) {
            expect(data.length).toBeGreaterThanOrEqual(0)
            doneFn();
        },
        error: function( data, response){
          expect( function(){ true; } ).toThrow(new Error("Parsing is not possible"));
        }
    });
  }); 
});
