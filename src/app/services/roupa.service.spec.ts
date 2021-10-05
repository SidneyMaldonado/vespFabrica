import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/Testing';
import { RoupaService } from './roupa.service';
import * as $ from 'jquery'
import { Roupa } from '../entities/roupa';

describe('RoupaService', () => {
  let service: RoupaService;
  let roupas: Roupa[]=[];

  beforeEach(() => {
    TestBed.configureTestingModule({ 
      imports:[HttpClientTestingModule],
      providers: [RoupaService] });
    service = TestBed.inject(RoupaService);
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Teste de Listar do componente com BackEnd', function(doneFn) {
    $.ajax({
        url: 'http://localhost:8080/roupa/listar',
        dataType: 'json',
        success: function (data: Roupa[], response: any) {
            expect(data.length).toBeGreaterThanOrEqual(0)
            doneFn();
        },
        error: function( data, response){
          expect( function(){ true; } ).toThrow(new Error("Parsing is not possible"));
        }
    });
  }); 
});
