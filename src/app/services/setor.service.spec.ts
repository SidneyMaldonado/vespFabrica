
import { TestBed } from '@angular/core/testing';
import { SetorService } from './setor.service';
import * as $ from 'jquery'
import { Setor } from '../entities/setor';
import { HttpClientTestingModule } from '@angular/common/http/testing';




describe('SetorService', () => {
  let service: SetorService;
  let setores: Setor[]=[];

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports:[HttpClientTestingModule],
      providers: [SetorService] });
    service = TestBed.inject(SetorService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Teste de Listar do componente com BackEnd', function(doneFn) {
    $.ajax({
        url: 'http://localhost:8080/setor/listar',
        dataType: 'json',
        success: function (data: Setor[], response: any) {
            expect(data.length).toBeGreaterThanOrEqual(0)
            doneFn();
        },
        error: function( data, response){
          expect( function(){ true; } ).toThrow(new Error("Parsing is not possible"));
        }
    });
  }); 
});