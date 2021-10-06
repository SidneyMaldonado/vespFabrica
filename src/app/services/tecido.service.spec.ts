import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { Tecido } from "../entities/tecido";
import * as $ from 'jquery'

import { TecidoService } from "./tecido.service";

describe('TecidoService', () => {
  let service: TecidoService;
  let tecido: Tecido[] = [];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TecidoService]
    });
    service = TestBed.inject(TecidoService);

  });

  
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Teste de Listar do componente com BackEnd', function (doneFn) {
    $.ajax({
      url: 'http://localhost:8080/tecido/listar',
      dataType: 'json',
      success: function (data: Tecido[], response: any) {
        expect(data.length).toBeGreaterThanOrEqual(0)
        doneFn();
      },
      error: function (data, response) {
        expect(function () { true; }).toThrow(new Error("Parsing is not possible"));
      }
    });
  });



});

